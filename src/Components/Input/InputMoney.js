import React from "react";

export default function InputMoney({ inputMoney, process }) {
  return (
    <div>
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
