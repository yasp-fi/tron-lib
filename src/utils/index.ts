import { Asset, DEXAsset } from '@yasp/models'
import { AssetAmount } from '@yasp/asset-amount'
import { createTronWeb } from '../lib'
import { getAddress, fromHex } from 'viem'

export function getHexAddress(address: string): string {
  const tronWeb = createTronWeb()
  const hexAddress = tronWeb.address.toHex(address)
  const formattedAddress = getAddress('0x' + hexAddress.substring(2))

  return formattedAddress
}

export function decodeAndFormatBalance(
  hexData: `0x${string}`,
  asset: DEXAsset
) {
  const rawBalance = fromHex(hexData, 'bigint').toString()

  if (asset.isNative) {
    return {
      rawBalance,
      parsedBalance: (Number(rawBalance) / 10 ** asset.decimals).toString(),
    }
  }

  const parsedBalance = asset.decimals
    ? AssetAmount.fromChain(asset.decimals, rawBalance)
    : undefined

  return {
    rawBalance,
    parsedBalance: parsedBalance ? parsedBalance?.toExact() : `0`,
  }
}
