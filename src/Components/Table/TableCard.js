import React from "react";
import "./Table.css";

export default function TableCard({ title, children }) {
  return (
    <div id="TableCard" className="container center">
      <h2>{title}</h2>
      <table cellPadding="10">{children}</table>
    </div>
  );
}
