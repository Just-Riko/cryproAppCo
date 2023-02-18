import { Alchemy, Network } from "alchemy-sdk";
import { ALCHEMY_API_KEY } from "../config/environments";

const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export const getCurrentBlockNumber = async () => await alchemy.core.getBlockNumber();
export const getCurrentBlockNumberHex = async () => `0x${(await alchemy.core.getBlockNumber()).toString(16)}`;

export const getBlockTransactionReceipts = async (blockNumber: string) => await alchemy.core.getTransactionReceipts({ blockNumber });