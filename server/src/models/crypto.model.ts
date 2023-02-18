import { model, Schema } from "mongoose";
import { ITransaction } from "../types/crypto.types";

const transactionSchema: Schema = new Schema({
  transactionId: {
    type: String,
    required: true,
  },
  s: {
    type: String,
    required: true,
  },
  r: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  gas: {
    type: Number,
    required: true,
  },
}, {
  timestamps: false,
  versionKey: false
});

const TransactionModel = model<ITransaction>("Transaction", transactionSchema);
export default TransactionModel;
