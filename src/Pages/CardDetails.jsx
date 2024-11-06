/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { addFavorite, addToWishlist, getAllFavorites } from "../utils";
const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { product_id } = useParams();
  const [card, setCard] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  useEffect(() => {
    const singleData = data.find((card) => card.product_id == product_id);
    console.log(singleData);
    setCard(singleData);
    const favorites = getAllFavorites();
    const isExist = favorites.find(
      (item) => item.product_id === singleData.product_id
    );
    if (isExist) {
      setIsAdded(true);
    }
  }, [data, product_id]);

  const handleAddToCart = (card) => {
    addFavorite(card);
    setIsAdded(true);
  };

  const handleWishlist = (card) => {
    addToWishlist(card);
    setWishlist(true);
  };

  const { product_image, product_title, price, specifications, rating } = card;
  console.log(specifications);
  return (
    <div className="relative">
      <div className="bg-purple-600 text-white relative min-h-[250px] mb-10 md:mb-64 lg:mb-[450px]">
        <div className="text-center">
          <div className="flex flex-col justify-center md:justify-start">
            <h1 className="lg:text-xl md:text-2xl pt-5 text-xl font-extrabold">
              Product Details
            </h1>
            <p className="text-sm mt-2">
              Below are the details of the product you are interested in.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-white rounded-3xl lg:h-[350px] mb-20 items-center justify-center flex-col md:flex-row md:absolute md:top-24 md:left-96">
        <div>
          <img className="w-[250px]" src={product_image} alt="" />
        </div>
        <div className="p-10 space-y-2">
          <h1 className="text-xl font-bold mt-3">{product_title}</h1>
          <p className="text-sm font-semibold text-zinc-800">Price: ${price}</p>

          <p className="text-zinc-500 text-xs w-3/4">{card.description}</p>
          <div>
            <h1 className="font-bold">
              Specification : <br />
            </h1>
            {Array.isArray(specifications) ? (
              specifications.map((specification, idx) => (
                <p className="text-xs" key={idx}>
                  {specification}
                </p>
              ))
            ) : (
              <p>No specifications available.</p>
            )}
          </div>
          <div>
            <h1 className=" font-bold">Rating: </h1>
            <div className="flex items-center gap-3 text-sm">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                color="#dddd"
                activeColor="#ffd700"
              />
              <span>{rating}</span>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => handleAddToCart(card)}
              className="btn px-4 bg-purple-600 text-white rounded-3xl mb-5 mt-1"
            >
              Add To Cart <FiShoppingCart className="font-bold" />
            </button>
            <button
              disabled={wishlist}
              onClick={() => handleWishlist(card)}
              className="border-2 border-zinc-300 rounded-full p-3 mb-5 mt-1"
            >
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
