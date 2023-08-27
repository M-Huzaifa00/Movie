import { Movie, fetchMovieResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useQuery } from "react-query";

const genericApiClient = new apiClient<Movie>("discover/movie");

export const useMovies = () =>
  useQuery<fetchMovieResponse<Movie>, Error>({
    queryKey: ["movie/tv"],
    queryFn: genericApiClient.getShows,
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
