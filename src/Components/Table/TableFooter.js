import React from "react";

export default function TableFooter({ total, result }) {
  return (
    <tfoot>
      <tr>
        <td>Subtotal</td>
        <td></td>
        <td></td>
        <td>{result}</td>
      </tr>
    </tfoot>
  );
}
