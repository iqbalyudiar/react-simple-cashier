import React from "react";
import Form from "./Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Validation from "../Validation/Validation";

import "./FormInputMenu.css";

export default function FormInputMenu(props) {
  return (
    <Form id="inputMenu" className="flex-container center">
      <h3>Please Input Your Menu</h3>
      {props.validation === true && (
        <Validation id="validation" text={props.text} />
      )}
      <Input
        name="item"
        type="text"
        placeholder="Enter Your Order"
        onChange={props.inputItem}
      />
      <Input
        name="price"
        type="text"
        placeholder="Enter Your Price"
        onChange={props.inputItem}
      />
      <Input
        name="quantity"
        type="text"
        placeholder="Enter Your Quantity"
        onChange={props.inputItem}
      />
      <Input id="order" type="text" value={props.result} />
      <Button id="entry" onClick={props.addOrder} text="Add Order" />
    </Form>
  );
}
