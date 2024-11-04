import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { product_id } = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    const singleData = data.find((card) => card.product_id == product_id);
    console.log(singleData);
    setCard(singleData);
  }, [data, product_id]);

  const [cart, setCart] = useState(0);

  const handleAddToCart = () => {
    setCart(cart + 1);
  };

  console.log(cart);

  const { product_image, product_title, price, specifications, rating } = card;
  console.log(specifications);
  return (
    <div className="flex bg-white rounded-3xl w-2/3 mx-auto p-5 gap-16 mb-20 items-center justify-center">
      <div>
        <img className="w-[400px]" src={product_image} alt="" />
      </div>
      <div className="p-10 space-y-3">
        <h1 className="text-3xl font-bold">{product_title}</h1>
        <p className="text-2xl font-semibold text-zinc-800">Price: ${price}</p>
        <div className="bg-lime-200 px-5 text-center py-3 rounded-full w-1/4">
          <h5 className="text-lime-800">In Stock</h5>
        </div>
        <p className="text-zinc-500">{card.description}</p>
        <div>
          <h1 className="font-bold">
            Specification : <br />
          </h1>
          {Array.isArray(specifications) ? (
            specifications.map((specification, idx) => (
              <p key={idx}>{specification}</p>
            ))
          ) : (
            <p>No specifications available.</p>
          )}
        </div>
        <div>
          <h1 className=" font-bold">Rating: </h1>
          <div className="flex items-center gap-3">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              color="#ffe800"
              activeColor="#ffd700"
            />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={handleAddToCart}
            className="btn px-8 py-3 bg-purple-600 text-white rounded-3xl"
          >
            Add To Cart <FiShoppingCart className="font-bold" />
          </button>
          <button className="border-2 border-zinc-300 rounded-full p-4">
            <FaRegHeart></FaRegHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
