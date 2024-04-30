import { createContext } from "react";
interface StepperContextType {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
  finalData: never[]; // Adjust this type according to your requirements
  setFinalData: React.Dispatch<React.SetStateAction<never[]>>;
}
export const StepperContext = createContext<StepperContextType | null>(null);
