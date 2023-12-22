import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/LoginPage/Login";
import Main from "../Layouts/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/productDetails/:id",
      },
    ],
  },
]);
