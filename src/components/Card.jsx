import React from "react";

const Card = props => {
  const { articulo, img, precio, handleAdd, handleRemove } = props;

  return (
    <div className="card">
      <h3>{articulo}</h3>
      <img src={img} alt="dummy img" />
      <p>{precio}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Card;
