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
  defaultData: IPortfolio;
  setData: (data: IPortfolio) => void;
  setDefaultData: () => void;
  portfolioId: string;
  setPortfolioId: (id: string) => void;
}

const defaultData = {
  theme: "#F4D1C6",
  role: "Full Stack Developer",
  name: "Santhosh Kumar",
  bio: `Curious Full Stack Developer who always tries to keep up with the trending technologies. Believes communication & empathy is the key to understanding the problems and providing the best possible solution in both the tech and not tech world.`,
  email: "santhosh@gmail.com",
  phone: "+91 9999988888",
  skills: ["React", "Angular", "Javascript", "Vue"],
  tools: ["Photoshop"],
  github: "https://github.com/santhosh",
  linkedIn: "https://linkedin.com/santhosh",
  projectOne: {
    title: "Space Exploration",
    description: `Landing page to explore planets in space, the goal is to build an interactive and user-friendly user interface with a good transition effect`,
  },
  educationOne: {
    university: "KGISL Institute Of Technology (2020 - 2024)",
    specialization: "Bachelor of Engineering Specialised in Computer Science",
  },
};

const usePortfolioStore = create<IPortfolioStore>((set) => ({
  defaultData: defaultData,
  data: defaultData,
  portfolioId: "",
  setPortfolioId: (id: string) =>
    set(
      produce((globalState: IPortfolioStore) => {
        globalState.portfolioId = id;
      })
    ),
  setData: (newData: IPortfolio) =>
    set(
      produce((globalState: IPortfolioStore) => {
        globalState.data = { ...globalState.data, ...newData };
      })
    ),

  setDefaultData: () =>
    set(
      produce((globalState: IPortfolioStore) => {
        globalState.data = { ...globalState.defaultData };
      })
    ),
}));
mountStoreDevtool("User Store", usePortfolioStore);

export default usePortfolioStore;
