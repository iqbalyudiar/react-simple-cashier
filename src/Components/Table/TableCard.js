import React from "react";

export default function TableCard({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <table>{children}</table>
    </div>
  );
}
