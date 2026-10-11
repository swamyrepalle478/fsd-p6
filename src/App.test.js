import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders the initial product store", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: "Product Store" })
  ).toBeInTheDocument();
  expect(screen.getByText("Cart Items: 0")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Laptop" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Mouse" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Keyboard" })).toBeInTheDocument();
});

test("adds a product from the form", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText("Product Name"), {
    target: { value: "Monitor" },
  });
  fireEvent.change(screen.getByPlaceholderText("Price"), {
    target: { value: "249.99" },
  });
  fireEvent.change(screen.getByPlaceholderText("Category"), {
    target: { value: "Electronics" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Add Product" }));

  expect(screen.getByRole("heading", { name: "Monitor" })).toBeInTheDocument();
  expect(screen.getByText("$249.99")).toBeInTheDocument();
});

test("adds a selected product to the cart", () => {
  const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  render(<App />);

  fireEvent.click(screen.getAllByRole("button", { name: "Add to Cart" })[0]);

  expect(screen.getByText("Cart Items: 1")).toBeInTheDocument();
  expect(alertSpy).toHaveBeenCalledWith("Laptop added to cart!");
  alertSpy.mockRestore();
});
