import { useQuery } from "react-query";
import { MovieVideo } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";

export const useMovieVideos = (id: number) => {
  const generic = new apiClient<MovieVideo>("/movie/");
  return useQuery<MovieVideo, Error>({
    queryKey: ["MovieVideo", id],
    queryFn: () => generic.getMovieVideoKey(id),
    staleTime: 24 * 60 * 60 * 1000,
  });
};
