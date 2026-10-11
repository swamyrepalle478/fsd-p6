import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`product-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <p>Category: {product.category}</p>

      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
