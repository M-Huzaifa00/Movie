import { create } from "zustand";

interface FormInerface {
  displaySearch: boolean;
  displayNormal:boolean;
  searchData: string;
  setData: (word: string) => void;
  setBack:() => void;
}

export  const useFormStore = create<FormInerface>((set) => ({
  displaySearch: false,
  displayNormal:true,
  searchData:'',
  setData: (word) => set({ displaySearch: true, displayNormal:false , searchData: word }),
  setBack:()=>set({displaySearch:false , displayNormal:true})
}));
