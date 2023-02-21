import React from 'react';
export type SearchValues = {
  value: string,
  selector: number;
}

export interface ITransactionsFilter {
  transactionId?: string;
  s?: string;
  r?: string;
  blockNumber?: string;
}

export interface ITransaction {
  _id: string,
  blockNumber: number,
  transactionId: string,
  value: number,
  gas: number,
  timestamp: number,
  r: string,
  s: string
}

export interface ITransactionsResponse {
  success: boolean,
  data: {
    count: number,
    pages: number,
    currentBlock: number,
    data: ITransaction[],
  }
}

export interface ITransactionProvider {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filter: ITransactionsFilter | undefined;
  setFilter: React.Dispatch<React.SetStateAction<ITransactionsFilter | undefined>>;
}