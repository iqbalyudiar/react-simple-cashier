import React from "react";

export default function TableFooter({ total, result }) {
  return (
    <tfoot>
      <tr>
        <td>Subtotal</td>
        <td>
          <button onClick={total}>Total Order</button>
        </td>
        <td></td>
        <td>{result}</td>
      </tr>
    </tfoot>
  );
}
