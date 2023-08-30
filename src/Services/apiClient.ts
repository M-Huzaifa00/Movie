import axios, { AxiosRequestConfig } from "axios";
import { fetchMovieResponse, fetchResponse } from "./Interfaces";
import { Config } from "../../Config";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: Config.AUTH_TOKEN,
  },
  params: {
    api_key: Config.API_KEY,
    accept: "application/json",
  },
});

export class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getGenres = () => {
    return axiosInstance
      .get<fetchResponse<T>>(this.endpoint)
      .then((resp) => resp.data);
  };
  getShows = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchMovieResponse<T>>(this.endpoint, config)
      .then((resp) => resp.data);
  };
  getMovieDetail = (id: number) => {
    return axiosInstance.get<T>(this.endpoint + id).then((resp) => resp.data);
  };
}
