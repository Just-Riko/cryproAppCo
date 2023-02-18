import { Request } from "express";
import { cryptoService } from "../services/crypto.service";

class CryptoController {
  async getTransactions(req: Request) {
    const transactionFilters = req.body;
    const page = +req.params.page;

    return await cryptoService.getTransactionByFilters(transactionFilters, page);
  }

  async loadBlock() {
    return await cryptoService.loadOneBlock();
  }
}

export const cryptoController = new CryptoController();