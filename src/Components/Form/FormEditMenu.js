import React from "react";
import Form from "./Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Validation from "../Validation/Validation";

import "./FormEditMenu.css";

export default function FormEdit(props) {
  return (
    <Form id="editMenu" className="flex-container container center">
      <h3>Please Edit Your Menu</h3>
      {props.validation === true && (
        <Validation id="validation" text={props.text} />
      )}
      <Input
        name="item"
        type="text"
        placeholder="Enter Your Order"
        value={props.currentOrder.item}
        onChange={props.editItem}
      />
      <Input
        name="price"
        type="text"
        placeholder="Enter Your Price"
        value={props.currentOrder.price}
        onChange={props.editItem}
      />
      <Input
        name="quantity"
        type="text"
        placeholder="Enter Your Quantity"
        value={props.currentOrder.quantity}
        onChange={props.editItem}
      />
      <Input
        readOnly
        id="order"
        type="text"
        value={props.currentOrder.orderTab}
      />

      <div id="buttonOrderEdit">
        <Button id="addTotalUpdate" onClick={props.addTotalUpdate} text="Add" />

        <Button id="update" onClick={props.editOrder} text="Update" />

        <Button id="close" onClick={props.closeEditing} text="Cancel" />
      </div>
    </Form>
  );
}
