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
        <td>
          <button onClick={deleteOrder}>delete</button>
          <button onClick={editOrder}>edit</button>
        </td>
      </tr>
    </tbody>
  );
}
