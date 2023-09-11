import { DEXAsset } from '@yasp/models'
import { encodeFunctionData, decodeFunctionResult } from 'viem'
import { chunk } from 'lodash'

import { TronWebContract } from './tron-web-contract'
import { createTronWeb } from '../lib/initialize-tronweb'
import { MultiCallABI, TRC20ABI } from '../ABI'
import { decodeAndFormatBalance, getHexAddress } from '../utils'
import { TRON_MULTICALL_ADDRESS } from '../utils/constants'

export class MultiCall extends TronWebContract {
  constructor(
    contractAddress: string = TRON_MULTICALL_ADDRESS,
    tronWeb = createTronWeb()
  ) {
    super(contractAddress, tronWeb, MultiCallABI.abi)
  }

  async call<T>(contracts: any[]) {
    const response = await this.callGetMethod('multicall', [[...contracts]])
    return response as T
  }

  async callSafe<T>(contracts: any[], chunkSize = 5): Promise<T> {
    const response: T[] = []
    for (const batch of chunk(contracts, chunkSize)) {
      const processed = (await this.call<T>(batch)) as any
      const resultList = processed[0]
      response.push(...resultList)
    }
    return response as T
  }

  async getBalancesByGivenAssets(
    walletAddress: string,
    assets: DEXAsset[]
  ): Promise<{
    symbol?: string
    nativeBalance: string
    tokenBalances: Record<
      string,
      {
        rawBalance: string
        parsedBalance: string
        usdBalance?: string
        symbol?: string
      }
    >
  }> {
    const assetAddresses: string[] = assets.map((asset) => {
      return getHexAddress(asset.onChainAddress)
    })

    const walletAddressHex = getHexAddress(walletAddress)
    const contractAddressHex = getHexAddress(TRON_MULTICALL_ADDRESS)

    const balanceOfCallData = encodeFunctionData({
      abi: TRC20ABI.abi,
      functionName: 'balanceOf',
      args: [walletAddressHex],
    })
    const trxBalanceOfCallData = encodeFunctionData({
      abi: MultiCallABI.abi,
      functionName: 'getEthBalance',
      args: [walletAddressHex],
    })

    const aggregateCallDataList = assetAddresses.map(
      (hexAddress: string, idx) => {
        const asset = assets[idx]
        if (asset.isNative) {
          return encodeFunctionData({
            abi: MultiCallABI.abi,
            functionName: 'aggregate',
            args: [[[contractAddressHex, trxBalanceOfCallData]]],
          })
        }

        return encodeFunctionData({
          abi: MultiCallABI.abi,
          functionName: 'aggregate',
          args: [[[hexAddress, balanceOfCallData]]],
        })
      }
    )

    const response = await this.callSafe<any>(aggregateCallDataList)

    const balanceOutputHexList = response.map((resultItem: `0x${string}`) => {
      const value = decodeFunctionResult({
        abi: MultiCallABI.abi,
        functionName: 'aggregate',
        data: resultItem,
      }) as [bigint, [`0x${string}`]]

      return value[1][0]
    }) as `0x${string}`[]

    let decodedNativeBalance: {
      rawBalance: string
      parsedBalance: string
    } = {
      rawBalance: '0',
      parsedBalance: '0',
    }

    const tokenBalances_: Array<
      [
        string,
        {
          rawBalance: string
          parsedBalance: string
          usdBalance?: string
          symbol?: string
        }
      ]
    > = []

    assetAddresses.forEach((address, i) => {
      const balanceOutputHex = balanceOutputHexList[i]
      const asset = assets[i]

      if (asset.isNative) {
        decodedNativeBalance = decodeAndFormatBalance(balanceOutputHex, asset)
      }

      const { rawBalance, parsedBalance } = decodeAndFormatBalance(
        balanceOutputHex,
        asset
      )

      tokenBalances_.push([
        address,
        {
          symbol: asset.symbol,
          rawBalance,
          parsedBalance,
        },
      ])
    })

    return {
      nativeBalance: decodedNativeBalance.parsedBalance,
      tokenBalances: Object.fromEntries(tokenBalances_),
    }
  }
}
