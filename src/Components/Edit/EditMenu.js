import React from "react";
import "./EditMenu.css";

export default function EditMenu({
  addTotalUpdate,
  editItem,
  editOrder,
  currentOrder,
  closeEditing
}) {
  return (
    <div id="editMenu" className="flex-container container center">
      <h3>Please Edit Your Menu</h3>
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

      <div id="buttonOrderEdit">
        <button id="addTotalUpdate" onClick={addTotalUpdate}>
          add
        </button>
        <button id="update" onClick={editOrder}>
          Update
        </button>
        <button id="close" onClick={closeEditing}>
          Cancel
        </button>
      </div>
    </div>
  );
}
