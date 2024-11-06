import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Sidebar = ({ categories }) => {
  console.log(categories);
  return (
    <div className="flex w-2/3 mx-auto flex-col bg-white p-5 rounded-2xl mt-10">
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `flex justify-center w-1/2 mx-auto my-2 px-20 py-3 rounded-3xl ${
              isActive ? " bg-purple-700 text-white " : ""
            } bg-gray-100 text-black`
          }
          key={category.product_id}
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Sidebar;
