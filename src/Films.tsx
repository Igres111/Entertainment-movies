import Content from "./Content";
import { useContext } from "react";
import Searched from "./Searched";
import { GlobalAPI } from "./ContextAPI";

function Films() {
  const { search } = useContext(GlobalAPI);
  return (
    <div className="bg-hole  lg:pl-40 min-h-screen ">
      {search.length === 0 ? <Content /> : <Searched />}
    </div>
  );
}

export default Films;
