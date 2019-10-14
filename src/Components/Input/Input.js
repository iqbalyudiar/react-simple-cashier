import React from "react";

export default function InputMenu(props) {
  return (
    <input
      name={props.name}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
