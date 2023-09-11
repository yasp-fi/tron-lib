import { createTronWeb } from '../lib/initialize-tronweb'
import { TronWebContract } from './tron-web-contract'

export class TRC20 extends TronWebContract {
  constructor(contractAddress: string, tronWeb = createTronWeb()) {
    super(contractAddress, tronWeb)
  }

  async name(): Promise<string> {
    return this.callGetMethod('name')
  }

  async symbol(): Promise<string> {
    return this.callGetMethod('symbol')
  }

  async decimals(): Promise<number> {
    return this.callGetMethod('decimals')
  }

  async totalSupply(): Promise<number> {
    return this.callGetMethod('totalSupply')
  }

  async balanceOf(address: string): Promise<number> {
    return this.callGetMethod('balanceOf', [address])
  }

  async transfer(to: string, value: number): Promise<string> {
    return this.callExecuteMethod('transfer', [to, value])
  }

  async allowance(owner: string, spender: string): Promise<number> {
    return this.callGetMethod('allowance', [owner, spender])
  }

  async approve(spender: string, value: number): Promise<string> {
    return this.callExecuteMethod('approve', [spender, value])
  }

  async transferFrom(from: string, to: string, value: number): Promise<string> {
    return this.callExecuteMethod('transferFrom', [from, to, value])
  }
}
