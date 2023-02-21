import { AxiosResponse } from "axios";
import { ETHERSCAN_API_KEY } from "../config/environments";
import { etherScanApiLink, gweiValueToEth } from "../consts";
import { ITransaction, ITransactionResponse } from "../types/crypto.types";
import { CreateError } from "./createError.util";

export const convertToGwei = (value: string) =>
  parseInt(value, 16) * gweiValueToEth;
export const convertToEth = (value: string) =>
  parseInt(value, 16) * gweiValueToEth * gweiValueToEth;

export const createGetBlockLink = (blockNumber: string) =>
  `${etherScanApiLink}api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true&apikey=${ETHERSCAN_API_KEY}`;

export const handleEtherscanError = (data: AxiosResponse) => {
  const isNumberError = data.data.status === "0";
  // not a very accurate check, but for an example it will do

  if (isNumberError) {
    throw CreateError.badRequest("Max rate limit reached");
  }
};

export const formatTransaction = <T extends ITransactionResponse>(
  data: T,
  gasUsed: string,
  timestamp: number
): ITransaction => {
  const { hash, value, r, s, blockNumber, gasPrice } = data;

  return {
    transactionId: hash,
    value: convertToEth(value),
    blockNumber: parseInt(blockNumber, 16),
    timestamp,
    r,
    s,
    gas: convertToGwei(gasUsed) * convertToGwei(gasPrice),
  };
};
