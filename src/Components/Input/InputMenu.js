import React from "react";

export default function InputMenu({ result, inputItem, addOrder }) {
  return (
    <div>
      <input
        name="item"
        type="text"
        placeholder="Enter Your Order"
        onChange={inputItem}
      />

      <input
        name="price"
        type="text"
        placeholder="Enter Your Price"
        onChange={inputItem}
      />
      <input
        name="quantity"
        type="text"
        placeholder="Enter Your Quantity"
        onChange={inputItem}
      />
      <input readOnly id="order" type="text" value={result} />
      <button id="entry" onClick={addOrder}>
        Add Order
      </button>
    </div>
  );
}
