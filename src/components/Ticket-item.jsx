import React from "react";

const TicketItem = props => {
  const { articulo, qty, subtotal } = props;
  return (
    <div className="ticket-item">
      <p>
        {articulo} x {qty} . . . . . . . . . . . $ {subtotal}
      </p>
    </div>
  );
};

export default TicketItem;
