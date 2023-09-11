/**
 * Copyright (c) iEXBase. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/// <reference types="node" />
declare module 'tronweb' {
  export class TronWeb {
    address: any
    transactionBuilder: any
    trx: any
    utils: any
    constructor(
      fullNode: string,
      solidityNode: string,
      eventServer: string | boolean,
      privateKey?: string | boolean
    )
    constructor(
      fullNode: string,
      solidityNode: string,
      eventServer: string | boolean,
      sideOptions: SideOptions,
      privateKey?: string | boolean
    )
    constructor(obj: TronWebConstructor)
    contract(data: JsonFragment[], address: string): TronContract
    setHeader(header: Header): void | Error
    currentProvider(): any
    currentProviders(): any
    getEventByTransactionID(transactionID: string): Promise<Transaction | any>
    getEventResult(
      contractAddress: string,
      options?: object
    ): Promise<EventResult[] | any> // check this return
    isConnected(): object
    isValidProvider(provider: any): any
    setAddress(address: string): void | Error
    setDefaultBlock(blockID?: BlockInput): void | string | boolean
    setEventServer(eventServer: any): void | Error
    setFullNode(fullNode: any): void | Error
    setPrivateKey(privateKey: string): void | Error
    setSolidityNode(solidityNode: any): void | Error
    createAccount(): Promise<Account | any>
    createRandom(options?: CreateRandomOptions): Promise<AccountMnemonic | any>
    fromAscii(string: any, padding: any): any
    fromDecimal(value: number | string): string
    fromSun(sun: string | number): string
    fromUtf8(string: string): string
    fromMnemonic(
      mnemonic: string,
      path?: string,
      wordlist?: string
    ): AccountMnemonic | Error
    isAddress(address: string): boolean
    sha3(string: string, prefix?: boolean): HexString
    toAscii(hex: HexString): string
    toBigNumber(amount: number | string | HexString): BigNumber | object
    toDecimal(value: string | HexString): number | string
    toHex(val: string | number | object | [] | BigNumber): HexString
    toSun(trx: number): string
    toUtf8(hex: string): string
    BigNumber(val: number | string | HexString): BigNumber
  }
  export namespace TronWeb {
    export namespace trx {
      function parseToken(token: any): any
      function getCurrentBlock(callback?: any): Promise<any>
      function getBlock(block: any, callback?: any): Promise<any>
      function getBlockByHash(blockHash: any, callback?: any): Promise<any>
      function getBlockByNumber(blockID: any, callback?: any): Promise<any>
      function getBlockTransactionCount(
        block: any,
        callback?: any
      ): Promise<any>
      function getTransactionFromBlock(
        block: any,
        index: number,
        callback?: any
      ): Promise<any>
      function getTransaction(transactionID: any, callback?: any): Promise<any>
      function getConfirmedTransaction(
        transactionID: any,
        callback?: any
      ): Promise<any>
      function getTransactionInfo(
        transactionID: any,
        callback?: any
      ): Promise<any>
      function getTransactionsToAddress(
        address: any,
        limit: number,
        offset: number,
        callback?: any
      ): Promise<any>
      function getTransactionsFromAddress(
        address: any,
        limit: number,
        offset: number,
        callback?: any
      ): Promise<any>
      function getTransactionsRelated(
        address: any,
        direction: any,
        limit: number,
        offset: number,
        callback?: any
      ): Promise<any>
      function getAccount(address: any, callback?: any): Promise<any>
      function getBalance(address: any, callback?: any): Promise<any>
      function getUnconfirmedAccount(address: any, callback?: any): Promise<any>
      function getUnconfirmedBalance(address: any, callback?: any): Promise<any>
      function getBandwidth(address: any, callback?: any): Promise<any>
      function getTokensIssuedByAddress(
        address: any,
        callback?: any
      ): Promise<any>
      function getTokenFromID(tokenID: any, callback?: any): Promise<any>
      function listNodes(callback?: any): Promise<any>
      function getBlockRange(
        start: number,
        end: number,
        callback?: any
      ): Promise<any>
      function listSuperRepresentatives(callback?: any): Promise<any>
      function listTokens(
        limit?: number,
        offset?: number,
        callback?: any
      ): Promise<any>
      function timeUntilNextVoteCycle(callback?: any): Promise<any>
      function getContract(contractAddress: any, callback?: any): Promise<any>
      function verifyMessage(
        message: any,
        signature: any,
        address: any,
        useTronHeader: any,
        callback?: any
      ): Promise<any>
      function sign(
        transaction: any,
        privateKey: any,
        useTronHeader: boolean,
        callback?: any
      ): Promise<any>
      function sendRawTransaction(
        signedTransaction: any,
        options: any,
        callback?: any
      ): Promise<any>
      function sendTransaction(
        to: any,
        amount: any,
        options: any,
        callback?: any
      ): Promise<any>
      function sendToken(
        to: any,
        amount: any,
        tokenID: any,
        options: any,
        callback?: any
      ): Promise<any>
      function freezeBalance(
        amount: any,
        duration: number,
        resource: string,
        options: any,
        callback?: any
      ): Promise<any>
      function unfreezeBalance(
        resource: string,
        options: any,
        callback?: any
      ): Promise<any>
      function updateAccount(
        accountName: string,
        options: any,
        callback?: any
      ): Promise<any>
      function signMessage(...args: any[]): Promise<any>
      function sendAsset(...args: any[]): Promise<any>
      function send(...args: any[]): Promise<any>
      function sendTrx(...args: any[]): Promise<any>
      function broadcast(...args: any[]): Promise<any>
      function signTransaction(...args: any[]): Promise<any>
      function getProposal(proposalID: any, callback?: any): Promise<any>
      function listProposals(callback: any): Promise<any>
      function getChainParameters(callback: any): Promise<any>
      function getAccountResources(address: any, callback?: any): Promise<any>
      function getExchangeByID(exchangeID: any, callback?: any): Promise<any>
      function listExchanges(callback?: any): Promise<any>
      function listExchangesPaginated(
        limit: number,
        offset: number,
        callback?: any
      ): Promise<any>
    }

    export namespace transactionBuilder {
      function sendTrx(
        to: any,
        amount: any,
        from: any,
        callback?: any
      ): Promise<any>
      function sendToken(
        to: any,
        amount: any,
        tokenID: any,
        from: any,
        callback?: any
      ): Promise<any>
      function purchaseToken(
        issuerAddress: any,
        tokenID: any,
        amount: any,
        buyer: any,
        callback?: any
      ): Promise<any>
      function freezeBalance(
        amount: any,
        duration: number,
        resource: string,
        address: any,
        callback?: any
      ): Promise<any>
      function unfreezeBalance(
        resource: string,
        address: any,
        callback?: any
      ): Promise<any>
      function withdrawBlockRewards(address: any, callback?: any): Promise<any>
      function applyForSR(address: any, url: any, callback?: any): Promise<any>
      function vote(votes: any, voterAddress: any, callback?: any): Promise<any>
      function createToken(
        options: any,
        issuerAddress: any,
        callback?: any
      ): Promise<any>
      function updateAccount(
        accountName: any,
        address: any,
        callback?: any
      ): Promise<any>
      function updateToken(
        options: any,
        issuerAddress: any,
        callback?: any
      ): Promise<any>
      function sendAsset(...args: any[]): Promise<any>
      function purchaseAsset(...args: any[]): Promise<any>
      function createAsset(...args: any[]): Promise<any>
      function updateAsset(...args: any[]): Promise<any>
      function createProposal(
        parameters: any,
        issuerAddress: any,
        callback?: any
      ): Promise<any>
      function deleteProposal(
        proposalID: any,
        issuerAddress: any,
        callback?: any
      ): Promise<any>
      function voteProposal(
        proposalID: any,
        isApproval: any,
        voterAddress: any,
        callback?: any
      ): Promise<any>
      function createTRXExchange(
        tokenName: any,
        tokenBalance: any,
        trxBalance: any,
        ownerAddress: any
      ): Promise<any>
      function createTokenExchange(
        firstTokenName: any,
        firstTokenBalance: any,
        secondTokenName: any,
        secondTokenBalance: any,
        ownerAddress: any,
        callback?: any
      ): Promise<any>
      function injectExchangeTokens(
        exchangeID: any,
        tokenName: any,
        tokenAmount: any,
        ownerAddress: any,
        callback?: any
      ): Promise<any>
      function withdrawExchangeTokens(
        exchangeID: any,
        tokenName: any,
        tokenAmount: any,
        ownerAddress: any,
        callback?: any
      ): Promise<any>
      function tradeExchangeTokens(
        exchangeID: any,
        tokenName: any,
        tokenAmountSold: any,
        tokenAmountExpected: any,
        ownerAddress: any,
        callback?: any
      ): Promise<any>
    }

    export namespace address {
      function fromHex(e: any): any
      function fromPrivateKey(e: any): any
      function toHex(e: any): any
    }
  }

  export default TronWeb
}
