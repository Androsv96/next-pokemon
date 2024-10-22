import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PokemonPageState {
  currentPage: number;
  offSet: number;
  count: number;
  setCurrentPage: (page: number) => void;
  setOffSet: (offSet: number) => void;
  setCount: (count: number) => void;
}

export const usePokemonStore = create<PokemonPageState>()(
  devtools(
    persist(
      (set) => ({
        currentPage: 1,
        offSet: 0,
        count: 0,
        setCount: (count: number) => set({ count: count }),
        setCurrentPage: (page: number) => set({ currentPage: page }),
        setOffSet: (offSet: number) => set({ offSet: offSet }),
      }),
      {
        name: "pokemon-store",
      }
    )
  )
);
