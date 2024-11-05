import { useEffect } from "react";
import { useState } from "react";
import { getAllFavorites, getWishlist } from "../utils";
import AddToCart from "../Components/AddToCart";
import Wishlist from "../Components/Wishlist";
const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [wishlists, setWishlist] = useState([]);

  const [isActive, setIsActive] = useState({
    available: "true",
    status: "Available",
  });

  const handleAvailableBtn = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "Available",
      });
    } else {
      setIsActive({
        available: false,
        status: "Selected",
      });
    }
  };

  useEffect(() => {
    const wishlist = getWishlist();
    setWishlist(wishlist);
  }, []);

  useEffect(() => {
    const favorites = getAllFavorites();
    setCards(favorites);
  }, []);
  return (
    <div>
      <div className="bg-purple-600 text-white min-h-[250px]">
        <div className="text-center">
          <div className="">
            <h1 className="lg:text-3xl md:text-2xl pt-10 text-xl font-extrabold">
              Dashboard
            </h1>
            <p className="text-sm mt-5">
              Below are the products that you added on the cart and wishlist
            </p>
          </div>
          <div className="mt-6 flex justify-center gap-5">
            {/*  */}
            <button
              onClick={() => handleAvailableBtn("available")}
              className={`${
                isActive.available
                  ? "btn text-purple-600 px-5 bg-white"
                  : "btn text-white px-5 bg-purple-600"
              }`}
            >
              Add To Card
            </button>
            <button
              onClick={() => handleAvailableBtn("selected")}
              className={`${
                isActive.available
                  ? "btn text-white px-5 bg-purple-600"
                  : "btn text-purple-600 px-5 bg-white"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {isActive.available ? (
        <div className="flex flex-col gap-10 px-52 py-10">
          {cards.map((card) => (
            <AddToCart key={card.id} card={card}></AddToCart>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-10 px-52 py-10">
          {wishlists.map((wishlist) => (
            <Wishlist key={wishlist.id} wishlist={wishlist}></Wishlist>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
