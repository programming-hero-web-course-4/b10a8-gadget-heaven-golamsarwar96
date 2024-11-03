import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
    ],
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default routes;
