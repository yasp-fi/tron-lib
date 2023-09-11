import { DEXAsset } from '@yasp/models'
import { MultiCall } from '../contract'

export async function getBalances(
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
  return new MultiCall().getBalancesByGivenAssets(walletAddress, assets)
}

