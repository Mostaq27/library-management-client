
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import SignUp from "../Shared/SignUp/SignUp";
import Login from "../Shared/Login/Login";
import TeamMember from "../Pages/Home/TeamMember/TeamMember";
import About from "../Pages/Home/About/About";
import AddBook from "../Pages/AddBook/AddBook";
import CategoryBooks from "../Pages/CategoryBooks/CategoryBooks";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Bookdetails from "../Pages/BookDetails/Bookdetails";
import ReadBook from "../Pages/ReadBook/ReadBook";
import Borrowed from "../Pages/Borrowed/Borrowed";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('https://library-management-system-server-bay.vercel.app/category')
        },
        {
          path: '/all_books',
          element: <AllBooks></AllBooks>
        },
        {
          path:'/add_book',
          element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
        },
        {
          path: '/category_books/:category',
          element: <CategoryBooks></CategoryBooks>
        },
        {
          path: `/details/:id`,
          element: <PrivateRoute><Bookdetails></Bookdetails></PrivateRoute>
        },
        {
          path:'/read_book/:id',
          element: <ReadBook></ReadBook>
        },
        {
          path: '/borrowed',
          element: <PrivateRoute><Borrowed></Borrowed></PrivateRoute>,
        },
        {
          path:'/update_book/:id',
          element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
          loader: ({params}) => fetch(`https://library-management-system-server-bay.vercel.app/books/${params.id}`)
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