import React from "react";
import TicketItem from "./Ticket-item";

const GetTotal = items => {
  let total = 0;

  items.forEach(item => {
    total += item.qty * item.precio;
  });
  return total;
};

const Ticket = props => {
  const { ticketList } = props;

  return (
    <div className="ticket">
      <h3>Ticket</h3>
      {ticketList.map(item => (
        <TicketItem
          key={item.articulo}
          articulo={item.articulo}
          qty={item.qty}
          subtotal={item.qty * item.precio}
        />
      ))}
      <h3>total . . . . . . . . . .${GetTotal(ticketList)}</h3>
    </div>
  );
};

export default Ticket;
