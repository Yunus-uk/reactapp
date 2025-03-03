import React from "react";
import CartProvider from "../components/CartContext";
import CartButton from "../components/CartButton";
import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <CartProvider>
      <CartButton />
      <ProductList />
    </CartProvider>
  );
}
