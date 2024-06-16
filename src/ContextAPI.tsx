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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleClickMark: (el: any) => void;
};

export const GlobalAPI = createContext<TApi>({
  userId: { email: "", pass: "" },
  setUserId: () => {},
  movies: [],
  setMovies: () => {},
  box: [],
  setBox: () => {},
  search: "",
  setSearch: () => {},
  handleClickMark: (el) => {},
});

function ContextAPI() {
  const [userId, setUserId] = useState({ email: "", pass: "" });
  const [movies, setMovies] = useState<TDataItem[]>(data);
  const [box, setBox] = useState<TDataItem[]>([]);
  const [search, setSearch] = useState<string>("");

  function handleClickMark(el) {
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
  // return { ...el, isBookmarked: !el.isBookmarked };
  // return { ...el };
  console.log(movies);
  return (
    <>
      <GlobalAPI.Provider
        value={{
          userId,
          setUserId,
          movies,
          setMovies,
          box,
          setBox,
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
