import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock((prevStatus) => !prevStatus);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* Remove dollar sign from price to match test expectations */}
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStockToggle}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
