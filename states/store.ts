import { create } from "zustand";

type Store = {
   isToggle: boolean;
   setIsToggle: (isToggle: boolean) => void;
   activePath: string;
   setActivePath: (activePath: string) => void;
};

export const useStore = create<Store>()((set) => ({
   isToggle: false,
   setIsToggle: (isToggle: boolean) => set({ isToggle }),
   activePath: "dashboard",
   setActivePath: (activePath: string) => set({ activePath }),
}));
