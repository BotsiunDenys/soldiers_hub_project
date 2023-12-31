import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Fees from "../pages/Fees/Fees";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import FeeCreate from "../pages/FeeCreate/FeeCreate";
import AdminPanel from "../pages/AdminPanel/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/fees",
        element: <Fees />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/feecreate",
        element: <FeeCreate />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);
