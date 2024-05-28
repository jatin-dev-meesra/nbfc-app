"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const initialState = {
  sessionStatus: false,
  token: "",
  userid: "",
  userDt: {},
};

const AppContext = createContext<any>(initialState);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if running in the browser
      const storedState = localStorage.getItem("appState");
      try {
        // Attempt to parse the stored state as JSON
        return storedState ? JSON.parse(storedState) : initialState;
      } catch (error) {
        console.error("Error parsing stored state:", error);
        // If parsing fails, return the initialState
        return initialState;
      }
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running in the browser
      try {
        // Attempt to stringify the state as JSON before storing
        localStorage.setItem("appState", JSON.stringify(state));
      } catch (error) {
        console.error("Error storing state in localStorage:", error);
      }
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
