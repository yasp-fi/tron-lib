import { TronWebContract } from './tron-web-contract'
import { createTronWeb } from '../lib/initialize-tronweb'
import { RouterABI } from '../ABI'

export class SunSwapRouter extends TronWebContract {
  constructor(contractAddress: string, tronWeb = createTronWeb()) {
    super(contractAddress, tronWeb, RouterABI.abi)
  }

  async WETH(): Promise<string> {
    return this.callGetMethod('WETH')
  }

  async factory(): Promise<string> {
    return this.callGetMethod('factory')
  }

  async getAmountsIn(amountOut: number, path: string[]): Promise<number[]> {
    return this.callGetMethod('getAmountsIn', [amountOut, path])
  }

  async getAmountsOut(amountIn: number, path: string[]): Promise<number[]> {
    return this.callGetMethod('getAmountsOut', [amountIn, path])
  }

  async addLiquidity(
    tokenA: string,
    tokenB: string,
    amountADesired: number,
    amountBDesired: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number
  ): Promise<{ amountA: number; amountB: number; liquidity: number }> {
    return this.callExecuteMethod('addLiquidity', [
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      to,
      deadline,
    ])
  }

  async quote(
    amountA: string,
    reserveA: string,
    reserveB: string
  ): Promise<number> {
    return this.callGetMethod('quote', [amountA, reserveA, reserveB])
  }

  async removeLiquidity(
    tokenA: string,
    tokenB: string,
    liquidity: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('removeLiquidity', [
      tokenA,
      tokenB,
      liquidity,
      amountAMin,
      amountBMin,
      to,
      deadline,
    ])
  }

  async removeLiquidityETH(
    token: string,
    liquidity: number,
    amountTokenMin: number,
    amountETHMin: number,
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('removeLiquidityETH', [
      token,
      liquidity,
      amountTokenMin,
      amountETHMin,
      to,
      deadline,
    ])
  }

  async removeLiquidityETHSupportingFeeOnTransferTokens(
    token: string,
    liquidity: number,
    amountTokenMin: number,
    amountETHMin: number,
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod(
      'removeLiquidityETHSupportingFeeOnTransferTokens',
      [token, liquidity, amountTokenMin, amountETHMin, to, deadline]
    )
  }

  async swapExactETHForTokens(
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('swapExactETHForTokens', [
      amountOutMin,
      path,
      to,
      deadline,
    ])
  }

  async swapExactETHForTokensSupportingFeeOnTransferTokens(
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod(
      'swapExactETHForTokensSupportingFeeOnTransferTokens',
      [amountOutMin, path, to, deadline]
    )
  }

  async swapExactTokensForETH(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('swapExactTokensForETH', [
      amountIn,
      amountOutMin,
      path,
      to,
      deadline,
    ])
  }

  async swapExactTokensForETHSupportingFeeOnTransferTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod(
      'swapExactTokensForETHSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline]
    )
  }

  async swapExactTokensForTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('swapExactTokensForTokens', [
      amountIn,
      amountOutMin,
      path,
      to,
      deadline,
    ])
  }

  async swapExactTokensForTokensSupportingFeeOnTransferTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod(
      'swapExactTokensForTokensSupportingFeeOnTransferTokens',
      [amountIn, amountOutMin, path, to, deadline]
    )
  }

  async swapTokensForExactETH(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('swapTokensForExactETH', [
      amountOut,
      amountInMax,
      path,
      to,
      deadline,
    ])
  }

  async swapTokensForExactTokens(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number
  ) {
    return this.callExecuteMethod('swapTokensForExactTokens', [
      amountOut,
      amountInMax,
      path,
      to,
      deadline,
    ])
  }
}
