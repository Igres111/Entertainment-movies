import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Films() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // console.log(location);
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Films;
