import { createContext } from "react";
import { initTransactionContextValues } from "../consts";
import { ITransactionProvider } from "../types/transactions.types";

export const TransactionsContext = createContext<ITransactionProvider>(initTransactionContextValues);