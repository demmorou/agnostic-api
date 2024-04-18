export interface IHttpClient {
  baseUrl: string
  post<T = any>(path: string, body: any, config: any): Promise<T>
  get<T = any>(path: string, config: any): Promise<T>
}