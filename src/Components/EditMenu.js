import React from "react";

export default function EditMenu({
  editItem,
  editOrder,
  currentOrder,
  closeEditing
}) {
  return (
    <div>
      <input
        name="item"
        type="text"
        placeholder="Enter Your Order"
        value={currentOrder.item}
        onChange={editItem}
      />

      <input
        name="price"
        type="text"
        placeholder="Enter Your Price"
        value={currentOrder.price}
        onChange={editItem}
      />
      <input
        name="quantity"
        type="text"
        placeholder="Enter Your Quantity"
        value={currentOrder.quantity}
        onChange={editItem}
      />
      <input readOnly id="order" type="text" value={currentOrder.orderTab} />
      <button id="entry" onClick={editOrder}>
        Update
      </button>
      <button id="entry" onClick={closeEditing}>
        Cancel
      </button>
    </div>
  );
}
