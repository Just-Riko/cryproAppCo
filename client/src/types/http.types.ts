export interface IHttpConfig {
  url?: string;
  headers?: Record<string, string>;
  params?: any;
  data?: any;
}

export interface IHttpClient {
  get<R>(url: string, config?: IHttpConfig): Promise<R | void>;
  post<R, D>(url: string, data: D, config?: IHttpConfig): Promise<R | void>;
  put<R, D>(url: string, data: D, config?: IHttpConfig): Promise<R | void>;
  delete<R>(url: string, config?: IHttpConfig): Promise<R | void>;
}

export interface IResponse<T = object | object[]> {
  status: number;
  data: T;
}

export type ExpectedFromQuery<T> = void | T;
