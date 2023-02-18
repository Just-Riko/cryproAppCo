export interface ITransaction {
  _id?: string;
  transactionId: string;
  s: string;
  r: string;
  blockNumber: number;
  blockConfirmations?: number;
  timestamp: number;
  value: number;
  gas: number;
}

export interface ITransactionResponse {
  _id?: string;
  hash: string;
  s: string;
  r: string;
  blockNumber: string;
  value: string;
  gasPrice: string;
  gas: string;
}

export interface ITransactionRequest {
  transactionId?: string;
  s?: string;
  r?: string;
  blockNumber?: number;
}