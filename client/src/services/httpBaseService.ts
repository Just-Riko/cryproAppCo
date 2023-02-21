import axios from "axios";
import { IHttpClient, IResponse } from "../types/http.types";

export class HTTPService {
  constructor(
    private fetchingService: IHttpClient,
    private baseUrl = process.env.REACT_APP_SERVER_URL
  ) {}

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  public async get<T>(url: string, params: any) {
    return await this.fetchingService.get<IResponse<T>>(
      this.getFullApiUrl(url),
      { params }
    );
  }
}

export const httpService = new HTTPService(axios);
