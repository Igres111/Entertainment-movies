import NavBar from "./NavBar";
import SearchQuery from "./SearchQuery";
import Content from "./Content";

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
      <div className="bg-hole	">
        <SearchQuery />
        <Content />
      </div>
    </div>
  );
}

export default Films;
