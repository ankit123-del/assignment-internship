
import React from "react";
import ProductCard from "./ProductCard"; 

import products from "./products";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default App;
