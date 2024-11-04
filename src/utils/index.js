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

export { addFavorite, getAllFavorites };
