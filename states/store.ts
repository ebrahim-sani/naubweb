import { create } from "zustand";

type Store = {
   isToggle: boolean;
   setIsToggle: (isToggle: boolean) => void;
   activePath: string;
   setActivePath: (activePath: string) => void;
   mobileSidebar: boolean;
   setMobileSideBar: (isToggle: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
   isToggle: false,
   setIsToggle: (isToggle: boolean) => set({ isToggle }),
   activePath: "dashboard",
   setActivePath: (activePath: string) => set({ activePath }),
   mobileSidebar: false,
   setMobileSideBar: (mobileSidebar: boolean) => set({ mobileSidebar }),
}));
