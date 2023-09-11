import { createTronWeb } from '../lib/initialize-tronweb'
import { TRC20ABI } from '../ABI'

export class TronWebContract {
  trxContract: any

  constructor(
    public contractAddress: string,
    public tronWeb = createTronWeb(),
    public abi: any = TRC20ABI.abi
  ) {}

  async init() {
    this.trxContract = await this.tronWeb.contract(
      this.abi,
      this.contractAddress
    )
  }

  async getNativeBalance(address: string) {
    return this.tronWeb.trx.getBalance(address)
  }

  get isReady() {
    return !!this.trxContract
  }

  async callGetMethod(methodName: string, params: unknown[] = []) {
    if (!this.isReady) {
      await this.init()
    }

    return this.trxContract[methodName](...params).call()
  }

  async callExecuteMethod(methodName: string, params: unknown[] = []) {
    if (!this.isReady) {
      await this.init()
    }

    return this.trxContract[methodName](...params).send()
  }
}
