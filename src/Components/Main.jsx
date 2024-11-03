import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="grid lg:grid-cols-4 gap-10 mt-10">
      <div className="grid-cols-1 rounded-lg">
        <Sidebar categories={categories}></Sidebar>
      </div>
      <div className="lg:grid-cols-3 lg:col-span-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
