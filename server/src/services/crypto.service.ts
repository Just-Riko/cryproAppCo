import axios from 'axios';
import { transactionsOnPage } from '../consts';
import { createGetBlockLink, formatTransaction, handleEtherscanError } from '../utils/crypto.utils';
import { cryptoManager, CryptoManager } from '../managers/crypto.manager';
import { ITransactionRequest, ITransactionResponse } from '../types/crypto.types';
import { createResponse } from '../utils';
import { getBlockTransactionReceipts, getCurrentBlockNumber, getCurrentBlockNumberHex } from '../alchemy';

export class CryptoService {
  manager: CryptoManager;
  constructor(manager: CryptoManager) {
    this.manager = manager;
  }

  async loadOneBlock() {
    const blockNumber = await getCurrentBlockNumberHex();
    const getBlockLink = createGetBlockLink(blockNumber);

    const blockRes = await axios.get(getBlockLink);
    handleEtherscanError(blockRes);
    const block = blockRes.data.result;
    const blockTimestamp = parseInt(block.timestamp, 16);

    const transactions = await getBlockTransactionReceipts(blockNumber);
    if (!transactions.receipts) return;
    const gasUsed = transactions.receipts.map(i => (i.gasUsed as unknown as string));

    const formatTransactions = block.transactions.map((transaction: ITransactionResponse, idx: number) => {
      return formatTransaction(transaction, gasUsed[idx], blockTimestamp)
    })

    this.manager.saveTransactionsInDB(formatTransactions);

    return createResponse(formatTransactions)
  }

  async getTransactionByFilters(filter: ITransactionRequest, page: number) {
    const data = await this.manager.findTransactionsInDB(filter, page);
    const count = (await this.manager.getTransactionsCount(filter));
    const pages = Math.ceil(count / transactionsOnPage);

    const currentBlock = await getCurrentBlockNumber();

    return createResponse({ data, count, pages, currentBlock });
  }
}

export const cryptoService = new CryptoService(cryptoManager);