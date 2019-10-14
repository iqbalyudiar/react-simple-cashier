import React from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Validation from "../Validation/Validation";

import "./FormInputMoney.css";

export default function FormInputMoney(props) {
  return (
    <div id="inputMoney">
      {props.validation === true && (
        <Validation id="validation" text={props.text} />
      )}
      <td>
        <p>Input your money</p>
      </td>
      <td>
        <Input name="money" type="text" onChange={props.inputMoney} />
      </td>
      <td>
        <Button onClick={props.process} text="Process" />
      </td>
    </div>
  );
}
