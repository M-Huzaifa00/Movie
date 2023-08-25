import { create } from 'zustand';



interface changeColorData {
    StateId?:number;
    MovieName?:string;
    TVName?:string;
    setId:(stateId:number) => void;
    setMovie:(movie:string) => void;
    setTv:(TV:string) => void;
}

export const useChangeColorStore = create<changeColorData>(set => ({
    setId:(stateId)=> set({StateId:stateId}),
    setMovie:(movie)=> set({MovieName:movie}),
    setTv:(Tv)=>set({TVName:Tv})
}))