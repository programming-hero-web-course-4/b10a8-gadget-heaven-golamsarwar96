import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Card = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget;
  return (
    <div className="card bg-base-100 shadow-xl mb-3">
      <figure>
        <img className="w-[200px]" src={product_image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{product_title}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions">
          <NavLink to={`/card/${product_id}`} className="btn btn-primary">
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  gadget: PropTypes.object.isRequired,
};
export default Card;
