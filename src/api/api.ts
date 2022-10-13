import axios, { AxiosRequestHeaders, CreateAxiosDefaults } from "axios";
export class Api {
  apiUrl = "http://localhost/";
  hedarData: AxiosRequestHeaders = {} as any;
  config: CreateAxiosDefaults<any> = {
    baseURL: this.apiUrl,
    headers: this.hedarData,
  };
  constructor() {

  }
  service = axios.create(this.config);
}
