import NavBar from "./NavBar";
import SearchQuery from "./SearchQuery";
import Content from "./Content";
import { useState } from "react";

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
    <div className="bg-hole">
      <Content />
    </div>
  );
}

export default Films;
