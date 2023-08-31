import { useQuery } from "react-query";
import { apiClient } from "../../Services/apiClient";
import { movieDetail } from "../../Services/Interfaces";
const generic = new apiClient<movieDetail>("/movie/");

export const useMovieDetail = (id: number) => {
  return useQuery<movieDetail,Error>({
    queryKey: ["MovieDetail", id],
    queryFn: () => generic.getMovieDetail(id),
    staleTime: 24 * 60 * 60 * 1000,
  });
};
