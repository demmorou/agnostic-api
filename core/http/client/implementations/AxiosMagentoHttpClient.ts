import { IHttpClient } from "../contracts/HttpClient";

export class AxiosMagentoHttpClient implements IHttpClient{
  baseUrl: string;

  post<T = any>(path: string, body: any, config: any): Promise<T> {
    throw new Error("Method not implemented.");
  }

  get<T = any>(path: string, config: any): Promise<T> {
    throw new Error("Method not implemented.");
  }
}