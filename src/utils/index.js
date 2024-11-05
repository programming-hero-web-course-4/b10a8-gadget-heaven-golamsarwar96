import toast from "react-hot-toast";

//get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  console.log(all);
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    return [];
  }
};

//add a coffee to local storage
const addFavorite = (card) => {
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.product_id === card.product_id);
  if (isExist) return toast.error("Gadget Already Exists");

  favorites.push(card);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Gadget Successfully Added");
};

//remove a coffee from local storage

const getWishlist = () => {
  const all = localStorage.getItem("wishlist");
  console.log(all);
  if (all) {
    const wishlist = JSON.parse(all);
    return wishlist;
  } else {
    return [];
  }
};

const addToWishlist = (card) => {
  const favorites = getWishlist();
  const isExist = favorites.find((item) => item.product_id === card.product_id);
  if (isExist) return toast.error("Already Added To Wishlist");

  favorites.push(card);
  localStorage.setItem("wishlist", JSON.stringify(favorites));
  toast.success("Added to wishlist");
};
export { addFavorite, getAllFavorites, getWishlist, addToWishlist };
