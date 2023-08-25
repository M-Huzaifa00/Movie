import { Genre, fetchResponse } from "../../Services/Interfaces";
import { apiClient } from "../../Services/apiClient";
import { useQuery } from "react-query";
import { useGenreStore } from "../../Zustand/useGenresStore";

export const useGenre = () => {
  const  endpoint  = useGenreStore( s => s.endpoint);
  const genericApiClient = new apiClient<Genre>(endpoint);
  return useQuery<fetchResponse<Genre>, Error>({
    queryKey: ["genres" , endpoint],
    queryFn: genericApiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    keepPreviousData:true,
  });
};
