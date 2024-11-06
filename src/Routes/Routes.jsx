import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "/src/Pages/Home.jsx";
import Statistics from "/src/Pages/Statistics.jsx";
import Dashboard from "/src/Pages/Dashboard.jsx";
import LatestRelease from "/src/Pages/LatestRelease.jsx";
import Cards from "../Components/Cards";
import CardDetails from "../Pages/CardDetails";
import ErrorPage from "../Components/ErrorPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../gadget.json"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../gadget.json"),
          },
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
      {
        path: "/latestrelease",
        element: <LatestRelease></LatestRelease>,
      },
      {
        path: "/card/:product_id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("../gadget.json"),
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
