import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !category.trim() ||
      price === "" ||
      !Number.isFinite(Number(price)) ||
      Number(price) < 0
    ) {
      alert("Enter a valid name, price, and category.");
      return;
    }

    onAddProduct({
      name: name.trim(),
      price: Number(price),
      category: category.trim(),
    });

    setName("");
    setPrice("");
    setCategory("");
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        min="0"
        step="0.01"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
