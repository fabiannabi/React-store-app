import React, { useState } from "react";
import NavBar from "./components/Nav";
import CardsList from "./components/Cards-List";
import Ticket from "./components/Ticket";
import "./App.scss";
import TicketItem from "./components/Ticket-item";

function App() {
  const [ticketList, setTicketList] = useState([]);

  const handleAdd = item => {
    let newList = ticketList.slice();

    let index = ticketList.findIndex(
      element => element.articulo === item.articulo
    );
    if (index > -1) {
      newList[index].qty++;
    } else {
      newList.push({
        articulo: item.articulo,
        qty: 1,
        precio: item.precio
      });
    }
    setTicketList(newList);
  };

  const handleRemove = item => {
    let newList = ticketList.slice();

    let index = ticketList.findIndex(
      element => element.articulo === item.articulo
    );
    if (index > -1) {
      if (newList[index].qty > 1) newList[index].qty--;
      if (newList[index].qty === 1) newList[index].qty = 0;
    }

    setTicketList(newList);
  };

  return (
    <div>
      <NavBar />
      <CardsList handleAdd={handleAdd} handleRemove={handleRemove} />
      <hr className="divisor"></hr>
      <Ticket ticketList={ticketList} />
    </div>
  );
}

export default App;
