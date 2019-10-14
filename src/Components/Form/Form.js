import React from "react";

export default function Form(props) {
  return (
    <form id={props.id} className={props.className}>
      {props.children}
    </form>
  );
}
