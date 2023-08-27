import { Movie, fetchMovieResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useQuery } from "react-query";
import { useGenreStore } from "../../Zustand/useGenresStore";


export const useMovies = () =>
{
  const endpoint = useGenreStore( s => s.MovieOrTvEndpoint)
  const genericApiClient = new apiClient<Movie>(endpoint);

  return useQuery<fetchMovieResponse<Movie>, Error>({
    queryKey: ["movie/tv" , endpoint ],
    queryFn: genericApiClient.getShows,
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
}