import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div className="grid grid-cols-4 border-2 gap-10">
      <div className="grid-cols-1 border rounded-lg">
        <Sidebar categories={categories}></Sidebar>
      </div>
      <div className="grid-cols-3 col-span-3 border">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
