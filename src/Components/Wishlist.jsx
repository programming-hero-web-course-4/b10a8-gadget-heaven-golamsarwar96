import PropTypes from "prop-types";
const Wishlist = ({ wishlist }) => {
  const { product_image, product_title, price, description } = wishlist || {};
  return (
    <div className="flex items-center bg-white p-5 gap-8">
      <div>
        <img
          src={product_image}
          className="w-[200px] ml-3 border rounded-3xl"
          alt=""
        />
      </div>
      <div className=" space-y-3">
        <h1 className="text-2xl font-bold">{product_title}</h1>
        <p className="text-zinc-600 text-xl">{description}</p>
        <p className="text-2xl font-bold">$ {price}</p>
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  wishlist: PropTypes.object,
};

export default Wishlist;
