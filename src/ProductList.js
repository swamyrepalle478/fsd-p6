import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999, category: "Electronics" },
    { id: 2, name: "Mouse", price: 29, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 79, category: "Accessories" },
  ]);
  const [cartCount, setCartCount] = useState(0);

  function handleAddProduct(product) {
    setProducts((previousProducts) => [
      ...previousProducts,
      { ...product, id: Date.now() },
    ]);
  }

  function handleAddToCart(id) {
    setCartCount((count) => count + 1);
    const product = products.find((item) => item.id === id);

    if (product) {
      alert(`${product.name} added to cart!`);
    }
  }

  return (
    <div className="container">
      <h1>Product Store</h1>

      <div className="cart-counter">Cart Items: {cartCount}</div>

      <ProductForm onAddProduct={handleAddProduct} />

      <h2>Product List</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
