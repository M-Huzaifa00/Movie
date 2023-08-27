import axios, { AxiosRequestConfig } from "axios";
import { fetchMovieResponse, fetchResponse } from "./Interfaces";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWY4YWUzODEzMjI2Y2RlODAyN2JmMDFlMjdkNjA0NSIsInN1YiI6IjY0ZTc5NTc1ZjJjZjI1MDBhZGYyZDJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crZ025TpqFxbiZlHCfmAmRAWMhQ-4XvsbHB9aUA7xKo",
  },
  params: {
    api_key: "25f8ae3813226cde8027bf01e27d6045",
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
  getShows = (config : AxiosRequestConfig) => {
    return axiosInstance
      .get<fetchMovieResponse<T>>(this.endpoint , config)
      .then((resp) => resp.data);
  };
}
