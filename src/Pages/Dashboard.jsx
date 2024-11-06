import { useEffect } from "react";
import { useState } from "react";
import { getAllFavorites, getWishlist } from "../utils";
import AddToCart from "../Components/AddToCart";
import Wishlist from "../Components/Wishlist";
import { MdOutlineCelebration } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [wishlists, setWishlist] = useState([]);
  const [isActive, setIsActive] = useState({
    available: "true",
    status: "Available",
  });

  console.log(cards);

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

  //Sort
  const handleSort = () => {
    const sortedCards = [...cards].sort((a, b) => b.price - a.price);
    setCards(sortedCards);
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
      <Helmet>
        <title>Gadget Heaven - Dashboard</title>
      </Helmet>
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
      <div className="flex justify-between flex-col md:flex-row mt-6 md:px-52">
        <h1 className="font-bold text-2xl text-center">Cart</h1>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <p>Total:</p>
          <button
            onClick={handleSort}
            className="btn px-5 py-2 rounded-3xl bg-white border-purple-600"
          >
            Sort by price
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-purple-600 text-white rounded-3xl px-5 py-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Purchase
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="flex justify-center ">
                <MdOutlineCelebration className="text-5xl" />
              </div>

              <h3 className="font-bold text-purple-600 text-4xl text-center mt-3">
                Congratulations
              </h3>
              <p className="py-4 text-black text-center">
                You Have Bought The Products
              </p>
              <div className="flex justify-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => navigate("/")}
                    className="btn bg-purple-600 text-white"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {isActive.available ? (
        <div className="flex flex-col gap-10 md:px-52 py-10">
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
