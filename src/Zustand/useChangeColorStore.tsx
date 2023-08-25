import { create } from 'zustand';



interface changeColorData {
    color?: string;
    bg?: string;
    StateId?:number;
    setStyles: () => void;
    setId:(stateId:number) => void;
}

export const useChangeColorStore = create<changeColorData>(set => ({
    color: undefined,
    bg: undefined,
    icon: false,
    id:undefined,
    setStyles: () => set({ color: 'white', bg: '#E50914'}),
    setId:(stateId)=> set({StateId:stateId})

}))