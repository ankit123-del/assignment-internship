function ProductCard({ name, image, price, description, stock }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "16px", width: "250px", margin: "10px",display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
      <p style={{ color: stock === "In Stock" ? "green" : "red" }}>{stock}</p>
    </div>
  );
}

export default ProductCard;
