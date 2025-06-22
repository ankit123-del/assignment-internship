// src/FriendCard.jsx
import React from 'react';

function FriendCard({ name, image, hobby, quote, contact }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <h2>{name}</h2>
      <p><strong>Hobby:</strong> {hobby}</p>
      <p><em>"{quote}"</em></p>
      <p><strong>Contact:</strong> {contact}</p>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "16px",
  margin: "10px",
  textAlign: "center",
  width: "250px",
  boxShadow: "0 0 8px rgba(0,0,0,0.1)"
};

const imgStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px"
};

export default FriendCard;
