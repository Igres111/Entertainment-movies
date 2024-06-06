import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import ContextAPI from "./ContextAPI";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextAPI />
  </React.StrictMode>
);
