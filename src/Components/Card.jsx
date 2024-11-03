const Card = ({ gadget }) => {
  const { product_title, product_img, category, price, rating } = gadget;
  return (
    <div>
      <h1>Product : {product_title}</h1>
    </div>
  );
};

export default Card;
