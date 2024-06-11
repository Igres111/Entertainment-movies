import React, { createContext, useState } from "react";
import data from "../public/data.json";
import App from "./App";

type TUserId = {
  email: string;
  pass: string;
};

type TApi = {
  userId: TUserId;
  setUserId: React.Dispatch<
    React.SetStateAction<{ email: string; pass: string }>
  >;
  movies: never[] | TDataItem[];
  setMovies: React.Dispatch<React.SetStateAction<never[] | TDataItem[]>>;
};

export const GlobalAPI = createContext<TApi>({
  userId: { email: "", pass: "" },
  setUserId: () => {},
  movies: [],
  setMovies: () => {},
});

function ContextAPI() {
  const [userId, setUserId] = useState({ email: "", pass: "" });
  const [movies, setMovies] = useState<TDataItem[]>(data);
  return (
    <>
      <GlobalAPI.Provider value={{ userId, setUserId, movies, setMovies }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
