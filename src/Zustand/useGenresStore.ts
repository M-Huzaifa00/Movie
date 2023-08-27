import { create } from "zustand";

interface changeEndpoint {
  endpoint: string;
  MovieOrTvEndpoint: string;
  SearchMovieOrTv : string;
  isMovie: boolean;
  onClickMovie: () => void;
  onClickTV: () => void;
}

export const useGenreStore = create<changeEndpoint>((set) => ({
  endpoint: "/genre/movie/list",
  MovieOrTvEndpoint: "/discover/movie",
  SearchMovieOrTv:'/search/movie',
  isMovie: true,
  onClickMovie: () =>
    set({
      endpoint: "/genre/movie/list",
      MovieOrTvEndpoint: "/discover/movie",
      SearchMovieOrTv:'/search/movie',
      isMovie: true,
    }),
  onClickTV: () =>
    set({
      endpoint: "/genre/tv/list",
      MovieOrTvEndpoint: "/discover/tv",
      SearchMovieOrTv:'/search/tv',
      isMovie: false,
    }),
}));
