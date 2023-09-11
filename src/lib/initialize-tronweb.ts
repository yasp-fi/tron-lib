const TronWeb = require('tronweb/dist/TronWeb.node')

export function createTronWeb(
  fullHost: string = 'https://rpc.ankr.com/http/tron',
  // FIXME: this is a hack to get around, needs to be removed when we go public
  tronProKey: string = 'ced7d010-e657-4028-85f4-ada92a252840',
  // Dummy private key
  privateKey: string = 'ba31f637140255ceec4ad32bcf95f0ad427b7e162108ab34d18bce4163e9e67e'
) {
  return new TronWeb({
    headers: { 'TRON-PRO-API-KEY': tronProKey },
    fullHost,
    privateKey,
  })
}
