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

  return (
    <div className="grid grid-cols-3">
      {gadgets.map((gadget) => (
        <Card key={gadget.id} gadget={gadget}></Card>
      ))}
    </div>
  );
};

export default Cards;
