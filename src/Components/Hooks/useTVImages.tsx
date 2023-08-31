import { useQuery } from "react-query";
import { apiClient } from "../../Services/apiClient";
import { Images } from "../../Services/Interfaces";
const genric = new apiClient<Images>('/tv/')

export const useTVImages = (id:number)=>{

    return useQuery({
        queryKey:['TVImage',id],
        queryFn:()=> genric.getTVImages(id),
        staleTime:24 * 60 * 60 * 1000
    })
}