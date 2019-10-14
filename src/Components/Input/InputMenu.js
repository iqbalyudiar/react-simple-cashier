import React from "react";
import "./InputMenu.css";

export default function InputMenu({ validation, result, inputItem, addOrder }) {
  // let inputValidation = {
  //   border: "1px solid red"
  // };
  // const [styles, setStyles] = useState(inputStyles);
  // if (item === "" && price === "" && quantity === "") {
  //   setStyles({ inputStyles: "1px solid red" });
  // } else {
  //   setStyles({ inputStyles: "1px solid black" });
  // }

  return (
    <div id="inputMenu" className="flex-container center">
      <h3>Please Input Your Menu</h3>
      {validation === true && <p id="validation"></p>}
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
