import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Callbacks {
  onUnauthorized: () => Promise<unknown>;
  onInvalidTokens: () => Promise<unknown>;
}

interface RequestConfig extends AxiosRequestConfig {
  _skipErrorHandler?: boolean;
}

export class RestClient {
  private readonly fetcher: AxiosInstance;
  private readonly defaultConfig = { method: 'GET' };

  constructor(apiUrl = '') {
    this.fetcher = axios.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.addErrorHandler();
  }

  request(url: string, config: RequestConfig = {}) {
    const conf = stripUndefined({ url, ...this.defaultConfig, ...config }) as AxiosRequestConfig;

    return this.fetcher(conf);
  }

  private addErrorHandler() {
    this.fetcher.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (err: any) => {
        return Promise.reject(err);
      }
    );
  }
}

function stripUndefined<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}
