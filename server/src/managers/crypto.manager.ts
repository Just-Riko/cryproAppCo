import { Model } from "mongoose";
import { transactionsOnPage } from "../consts";
import TransactionModel from "../models/crypto.model";
import { ITransaction, ITransactionRequest } from "../types/crypto.types";

export class CryptoManager {
  model: Model<any>;
  constructor(model: Model<any>) {
    this.model = model;
  }

  getTransactionsCount(filter: ITransactionRequest) {
    return this.model.count(filter).exec();
  }

  findTransactionsInDB(filter: ITransactionRequest, page: number) {
    return this.model
      .find(filter)
      .limit(transactionsOnPage)
      .skip(page * transactionsOnPage)
      .sort({ timestamp: "desc" })
      .exec();
  }

  saveTransactionsInDB(transactions: ITransaction[]) {
    return this.model.insertMany(transactions);
  }
}

export const cryptoManager = new CryptoManager(TransactionModel);
