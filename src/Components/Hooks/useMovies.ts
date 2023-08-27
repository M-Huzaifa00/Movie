import { Movie, fetchMovieResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useInfiniteQuery } from "react-query";
import { useGenreStore } from "../../Zustand/useGenresStore";
import { useChangeColorStore } from "../../Zustand/useChangeColorStore";

export const useMovies = () => {
  const { MovieOrTvEndpoint, isMovie } = useGenreStore();
  const { StateId, ShowId } = useChangeColorStore();
  let generics: number | undefined;
  if (isMovie) {
    generics = StateId;
  } else {
    generics = ShowId;
  }
  const genericApiClient = new apiClient<Movie>(MovieOrTvEndpoint);
  return useInfiniteQuery<fetchMovieResponse<Movie>, Error>({
    queryKey: ["movie/tv", MovieOrTvEndpoint, generics],
    queryFn: ({ pageParam }) =>
      genericApiClient.getShows({
        params: {
          with_genres: generics,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.page <= 39742 ? allPage.length + 1 : undefined;
    },
  });
};
