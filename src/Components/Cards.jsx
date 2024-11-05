import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const data = useLoaderData();
  console.log(data.length);
  const { category } = useParams();
  console.log(category);
  const [gadgets, setGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filterByCategory);
    } else {
      setGadgets(data);
    }
  }, [category, data]);

  if (gadgets.length === 0) {
    return (
      <div className="mt-10 text-purple-600 text-5xl font-bold">
        NO PRODUCT AVAILABLE
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 p-4 gap-6 mb-10">
      {gadgets.map((gadget) => (
        <Card key={gadget.id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default Cards;
