import { create } from "zustand";
import { produce } from "immer";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface IPortfolio {
  name?: string;
  bio?: string;
  email?: string;
  phone?: string;
  skills?: string[];
  tools?: string[];
  github?: string;
  linkedIn?: string;
  projectOne?: {
    title?: string;
    description?: string;
  };
  projectTwo?: {
    title?: string;
    description?: string;
  };
  educationOne?: {
    university?: string;
    specialization?: string;
  };
  educationTwo?: {
    university?: string;
    specialization?: string;
  };
  role?: string;
  theme?: string;
}

interface IPortfolioStore {
  data: IPortfolio;
  setData: (data: IPortfolio) => void;
}

const usePortfolioStore = create<IPortfolioStore>((set) => ({
  data: { theme: "#F4D1C6" },
  setData: (newData: IPortfolio) =>
    set(
      produce((globalState: IPortfolioStore) => {
        globalState.data = { ...globalState.data, ...newData };
      })
    ),
}));
mountStoreDevtool("User Store", usePortfolioStore);

export default usePortfolioStore;
