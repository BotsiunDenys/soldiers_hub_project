import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/slices/AuthSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
