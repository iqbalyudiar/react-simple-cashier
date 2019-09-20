import React from "react";

export default function TableMenu({
  id,
  item,
  price,
  quantity,
  result,
  deleteOrder,
  editOrder
}) {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{item}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{result}</td>
        <td id="buttonOrder2">
          <button id="edit" onClick={editOrder}>
            edit
          </button>
          <button id="delete" onClick={deleteOrder}>
            delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
