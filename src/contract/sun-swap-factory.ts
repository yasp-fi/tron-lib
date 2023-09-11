import { TronWebContract } from './tron-web-contract'
import { createTronWeb } from '../lib/initialize-tronweb'
import { FactoryABI } from '../ABI'

export class SunSwapFactory extends TronWebContract {
  constructor(contractAddress: string, tronWeb = createTronWeb()) {
    super(contractAddress, tronWeb, FactoryABI.abi)
  }

  async getPairAddress(tokenA: string, tokenB: string): Promise<string> {
    return this.callGetMethod('getPair', [tokenA, tokenB])
  }
}
