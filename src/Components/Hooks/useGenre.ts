import { Genre, fetchResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useQuery } from "react-query";
const genericApiClient = new apiClient<Genre>("/genre/movie/list");

export const useGenre = () =>
{
 return  useQuery<fetchResponse<Genre> , Error>({
    queryKey: ["genres"],
    queryFn: genericApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
}