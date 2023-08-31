import { useQuery } from "react-query"
import { apiClient } from "../../Services/apiClient"
import { TVDetails } from "../../Services/Interfaces";
const generic = new apiClient<TVDetails>('/tv/');


export const useTVDetails = (id: number) => {

    return useQuery({
        queryKey: ['TCDetails', id],
        queryFn: () => generic.getTVDetails(id),
        staleTime: 24 * 60 * 60 * 1000

    })
}