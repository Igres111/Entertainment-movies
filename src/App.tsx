import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Films from "./Films";
import Layout from "./Layout";
import Movies from "./Movies";
import Tvshow from "./Tvshow";
import Bookmark from "./Bookmark";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Films />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/tvshow",
          element: <Tvshow />,
        },
        {
          path: "/bookmark",
          element: <Bookmark />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
