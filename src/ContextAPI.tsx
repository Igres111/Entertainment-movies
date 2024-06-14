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
  movies: TDataItem[];
  setMovies: React.Dispatch<React.SetStateAction<TDataItem[]>>;
  box: TDataItem[];
  setBox: React.Dispatch<React.SetStateAction<TDataItem[]>>;
};

export const GlobalAPI = createContext<TApi>({
  userId: { email: "", pass: "" },
  setUserId: () => {},
  movies: [],
  setMovies: () => {},
  box: [],
  setBox: () => {},
});

function ContextAPI() {
  const [userId, setUserId] = useState({ email: "", pass: "" });
  const [movies, setMovies] = useState<TDataItem[]>(data);
  const [box, setBox] = useState<TDataItem[]>([]);
  console.log(box);
  return (
    <>
      <GlobalAPI.Provider
        value={{ userId, setUserId, movies, setMovies, box, setBox }}
      >
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
