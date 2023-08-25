import { create } from "zustand";

interface changeEndpoint {
  endpoint: string;
  isMovie:boolean;
  onClickMovie: () => void;
  onClickTV: () => void;
}

export const useGenreStore = create<changeEndpoint>((set) => ({
  endpoint: "/genre/movie/list",
  isMovie:true,
  onClickMovie: () => set({ endpoint: "/genre/movie/list" , isMovie:true }),
  onClickTV: () => set({ endpoint: "/genre/tv/list" , isMovie:false}),
}));
