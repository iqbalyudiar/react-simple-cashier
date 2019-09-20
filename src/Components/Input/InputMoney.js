import React from "react";
import "./InputMoney.css";

export default function InputMoney({ inputMoney, process }) {
  return (
    <div id="inputMoney">
      <td>
        <p>Input your money</p>
      </td>
      <td>
        <input name="money" type="text" onChange={inputMoney} />
      </td>
      <td>
        <button onClick={process}>Process</button>
      </td>
    </div>
  );
}
