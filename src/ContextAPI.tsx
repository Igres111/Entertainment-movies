import React, { createContext, useState } from "react";

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
};

export const GlobalAPI = createContext<TApi>({
  userId: { email: "", pass: "" },
  setUserId: () => {},
});

function ContextAPI() {
  const [userId, setUserId] = useState({ email: "", pass: "" });

  return (
    <>
      <GlobalAPI.Provider value={{ userId, setUserId }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
