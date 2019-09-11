import React from "react";

export default function TableMenu({ item, price, quantity, result }) {
  return (
    <tbody>
      <tr>
        <td>{item}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{result}</td>
        <td>{/* <button onClick={this.props.deleteItem}>-</button> */}</td>
      </tr>
    </tbody>
  );
}
