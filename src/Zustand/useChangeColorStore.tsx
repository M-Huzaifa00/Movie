import { create } from 'zustand';



interface changeColorData {
    StateId?:number;
    ShowId?:number;
    MovieName?:string;
    TVName?:string;
    setId:(id:number)=>void;
    setMovie:(movie:string , id:number) => void;
    setTv:(TV:string , id:number) => void;
}

export const useChangeColorStore = create<changeColorData>(set => ({
    setId:(id) => set({StateId:id}),
    setMovie:(movie,id)=> set({MovieName:movie , StateId:id}),
    setTv:(Tv,id)=>set({TVName:Tv,ShowId:id})
}))