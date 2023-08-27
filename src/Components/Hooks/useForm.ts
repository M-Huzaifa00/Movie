import { Movie, fetchMovieResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useQuery } from "react-query";
import { useGenreStore } from "../../Zustand/useGenresStore";
import { useFormStore } from "../../Zustand/useFormStore";

export const useForms = () => {
  const { SearchMovieOrTv } = useGenreStore();
  const genericApiClient = new apiClient<Movie>(SearchMovieOrTv);
  const wordToBeSearched = useFormStore((s) => s.searchData);
  return useQuery<fetchMovieResponse<Movie>, Error>({
    queryKey: ["SearchMovie/Tv", SearchMovieOrTv , wordToBeSearched],
    queryFn: () =>
      genericApiClient.getShows({
        params: {
          query:wordToBeSearched
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};
