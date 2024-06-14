import React from "react";
import NavBar from "./NavBar";
import SearchQuery from "./SearchQuery";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-bluehole">
      <NavBar />
      <SearchQuery />
      <Outlet />
    </div>
  );
}

export default Layout;
