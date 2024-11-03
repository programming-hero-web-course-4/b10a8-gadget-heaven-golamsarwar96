import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-full mx-auto px-8 py-3">
      {/* Navbar Section */}
      <Navbar></Navbar>
      {/* Main Content Section */}
      <div className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;