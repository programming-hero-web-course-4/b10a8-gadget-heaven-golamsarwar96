import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Sidebar = ({ categories }) => {
  console.log(categories);
  return (
    <div className="flex flex-col bg-white ">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `flex justify-center w-1/2 mx-auto my-2 py-3 rounded-3xl ${
              isActive ? " bg-purple-700 text-white " : ""
            } bg-gray-100 text-black`
          }
          key={category.category}
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.object,
};

export default Sidebar;
