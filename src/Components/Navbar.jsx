import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "./Banner";
const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {pathname === "/" ? (
        <div className="bg-purple-600 md:px-14 px-2 rounded-3xl">
          <div className="navbar text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-white text-purple-600 px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/"
                  >
                    <a>Home</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/statistics"
                  >
                    <a>Statistics</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/dashboard"
                  >
                    <a>Dashboard</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/latestrelease"
                  >
                    <a>Latest Release</a>
                  </NavLink>
                </ul>
              </div>
              <a className="text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex gap-2">
              <ul className="flex items-center gap-8 font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-white text-purple-600 px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/"
                >
                  <a>Home</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/statistics"
                >
                  <a>Statistics</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/dashboard"
                >
                  <a>Dashboard</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/latestrelease"
                >
                  <a>Latest Release</a>
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end flex gap-3">
              <button className="bg-white text-black p-2 rounded-full">
                <FiShoppingCart />
              </button>
              <button className="bg-white text-black p-2 rounded-full">
                <FaRegHeart />
              </button>
            </div>
          </div>
          <Banner></Banner>
        </div>
      ) : (
        <div className="bg-white text-black md:px-14 px-2 rounded-t-3xl">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
                >
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-white text-purple-600 px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/"
                  >
                    <a>Home</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/statistics"
                  >
                    <a>Statistics</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/dashboard"
                  >
                    <a>Dashboard</a>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                          : ""
                      }`
                    }
                    to="/latestrelease"
                  >
                    <a>Latest Release</a>
                  </NavLink>
                </ul>
              </div>
              <a className="text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex gap-2">
              <ul className="flex items-center gap-8 font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-white text-purple-600 px-5 py-2 rounded-2xl"
                        : ""
                    }`
                  }
                  to="/"
                >
                  <a>Home</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/statistics"
                >
                  <a>Statistics</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/dashboard"
                >
                  <a>Dashboard</a>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " bg-purple-600 text-white px-5 py-2 rounded-2xl "
                        : ""
                    }`
                  }
                  to="/latestrelease"
                >
                  <a>Latest Release</a>
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end flex gap-3">
              <button className="bg-white text-black p-2 rounded-full">
                <FiShoppingCart />
              </button>
              <button className="bg-white text-black p-2 rounded-full">
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
<h1 className="text-5xl">Hello Navbar</h1>;
