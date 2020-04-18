import React from "react";
import Card from "./Card";

const test = [
  {
    articulo: "camisa",
    img: "http://placecorgi.com/260/180",
    precio: "100",
    id: 0,
    qty: 0
  },
  {
    articulo: "zapatos",
    img: "http://placecorgi.com/260/180",
    precio: "60",
    id: 1,
    qty: 0
  },
  {
    articulo: "aretes",
    img: "http://placecorgi.com/260/180",
    precio: "20",
    id: 2,
    qty: 0
  },
  {
    articulo: "pantalon",
    img: "http://placecorgi.com/260/180",
    precio: "457",
    id: 3,
    qty: 0
  },
  {
    articulo: "corbata",
    img: "http://placecorgi.com/260/180",
    precio: "4",
    id: 4,
    qty: 0
  },
  {
    articulo: "sombrero",
    img: "http://placecorgi.com/260/180",
    precio: "3005",
    id: 5,
    qty: 0
  }
];

const CardsList = props => {
  const { handleAdd, handleRemove } = props;
  return (
    <div className="cards-list">
      {test.map(card => (
        <Card
          key={card.id}
          articulo={card.articulo}
          img={card.img}
          precio={card.precio}
          handleAdd={() =>
            handleAdd({ articulo: card.articulo, precio: card.precio })
          }
          handleRemove={() => {
            handleRemove({ articulo: card.articulo, precio: card.precio });
          }}
        />
      ))}
    </div>
  );
};
export default CardsList;
