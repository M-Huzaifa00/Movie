import { create } from "zustand";

interface changeEndpoint {
  endpoint: string;
  MovieOrTvEndpoint: string;
  isMovie: boolean;
  onClickMovie: () => void;
  onClickTV: () => void;
}

export const useGenreStore = create<changeEndpoint>((set) => ({
  endpoint: "/genre/movie/list",
  MovieOrTvEndpoint: "/discover/movie",
  isMovie: true,
  onClickMovie: () =>
    set({
      endpoint: "/genre/movie/list",
      MovieOrTvEndpoint: "/discover/movie",
      isMovie: true,
    }),
  onClickTV: () =>
    set({
      endpoint: "/genre/tv/list",
      MovieOrTvEndpoint: "/discover/tv",
      isMovie: false,
    }),
}));
