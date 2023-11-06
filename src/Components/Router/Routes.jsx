
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Shared/SignUp/SignUp";
import Login from "../Shared/Login/Login";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "*",
          element: <NotFound></NotFound>
        }
      ]
    },
  ]);

  export default router;