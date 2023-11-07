
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Shared/SignUp/SignUp";
import Login from "../Shared/Login/Login";
import TeamMember from "../Pages/Home/TeamMember/TeamMember";
import About from "../Pages/Home/About/About";
import AddBook from "../Pages/AddBook/AddBook";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";



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
          path:'/add_book',
          element:<AddBook></AddBook>
        },
        {
          path: '/category_books',
          element: <CategoryBooks></CategoryBooks>
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
          path:'/team',
          element: <TeamMember></TeamMember>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path: "*",
          element: <NotFound></NotFound>
        }
      ]
    },
  ]);

  export default router;