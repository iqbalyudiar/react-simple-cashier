import React from "react";

export default function TableMenu({
  item,
  price,
  quantity,
  result,
  deleteOrder
}) {
  return (
    <tbody>
      <tr>
        <td>{item}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{result}</td>
        <td>
          <button onClick={deleteOrder}>-</button>
        </td>
      </tr>
    </tbody>
  );
}
