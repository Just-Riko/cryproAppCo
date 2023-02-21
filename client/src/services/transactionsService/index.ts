import { ITransactionsFilter, ITransactionsResponse } from "../../types/transactions.types";
import { httpService, HTTPService } from "../httpBaseService";

class TransactionsService {
  constructor(private httpService: HTTPService) { }

  public async getTransactions(page: number = 0, filter?: ITransactionsFilter) {
    try {
      return (await this.httpService.get<ITransactionsResponse>(`crypto/get-transactions/${page}`, filter))?.data;
    }
    catch (e) {
      console.log(e)
    }
  }
}

export const transactionsService = new TransactionsService(httpService);