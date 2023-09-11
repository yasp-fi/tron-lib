import { TronWebContract } from './tron-web-contract'
import { createTronWeb } from '../lib/initialize-tronweb'
import { ValuesAggregatorABI } from '../ABI'

export class SunSwapValuesAggregator extends TronWebContract {
  constructor(contractAddress: string, tronWeb = createTronWeb()) {
    super(contractAddress, tronWeb, ValuesAggregatorABI.abi)
  }

  async getReserves(
    tokenA: string,
    tokenB: string,
    exchangeAddress: string
  ): Promise<[number, number]> {
    return this.callGetMethod('getReserves', [tokenA, tokenB, exchangeAddress])
  }
}
