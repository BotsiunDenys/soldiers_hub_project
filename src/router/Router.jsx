import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Main from "../pages/Main/Main";
import Fees from "../pages/Fees/Fees";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
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
    ],
  },
]);
