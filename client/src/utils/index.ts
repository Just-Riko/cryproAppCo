import { ITransactionsFilter, SearchValues } from "../types/transactions.types";

export const formatSearchFilters = ({ value, selector }: SearchValues): ITransactionsFilter | undefined => {
  if (!value) return;

  switch (selector) {
    case 0:
      return { transactionId: value }
    case 1:
      return { blockNumber: value }
    case 2:
      return { s: value }
    case 3:
      return { r: value }
    default:
      return
  }
}

export const shortenStringTo12 = (str: string) => `${str.slice(0, 12)}...`;