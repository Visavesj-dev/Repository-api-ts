import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface AxiosConfig extends AxiosRequestConfig {}

enum HttpMethod {
  GET = "GET",
}

export class BaseService {
  private httpClient: AxiosInstance;

  constructor(options: AxiosConfig = {}) {
    this.httpClient = axios.create(options);
  }

  private apiRequest<T>(config: AxiosConfig) {
    const request = this.httpClient.request<T>(config);
    return request.then((response) => {
      return response.data;
    });
  }

  protected get<T>(url: string) {
    const request = { method: HttpMethod.GET, url };
    return this.apiRequest<T>(request);
  }
}

export default BaseService;
