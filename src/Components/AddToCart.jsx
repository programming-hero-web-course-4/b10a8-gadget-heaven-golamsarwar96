import PropTypes from "prop-types";
const AddToCart = ({ card }) => {
  const { product_image, product_title, price, description } = card;
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

AddToCart.propTypes = {
  card: PropTypes.object,
};

export default AddToCart;
