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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleClickMark: (el: TDataItem) => void;
};

export const GlobalAPI = createContext<TApi>({
  userId: { email: "", pass: "" },
  setUserId: () => {},
  movies: [],
  setMovies: () => {},
  search: "",
  setSearch: () => {},
  handleClickMark: () => {},
});

function ContextAPI() {
  const [userId, setUserId] = useState({ email: "", pass: "" });
  const [movies, setMovies] = useState<TDataItem[]>(data);
  const [search, setSearch] = useState<string>("");

  function handleClickMark(el: TDataItem) {
    setMovies((prev) =>
      prev.map((element) => {
        if (element.title === el.title) {
          return { ...element, isBookmarked: !element.isBookmarked };
        } else {
          return { ...element };
        }
      })
    );
  }
  return (
    <>
      <GlobalAPI.Provider
        value={{
          userId,
          setUserId,
          movies,
          setMovies,
          search,
          setSearch,
          handleClickMark,
        }}
      >
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
