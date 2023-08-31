import { useQuery } from "react-query";
import { apiClient } from "../../Services/apiClient";
import { Images } from "../../Services/Interfaces";

export const useMovieImage = (id: number) => {
  const generic = new apiClient<Images>("/movie/");
  return useQuery<Images, Error>({
    queryKey: ["MovieImage", id],
    queryFn: () => generic.getMovieImages(id),
    staleTime: 24 * 60 * 60 * 1000,
  });
};
