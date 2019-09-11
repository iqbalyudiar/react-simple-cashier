import React from "react";

export default function TableHeader({
  firstCol,
  secondCol,
  thirdCol,
  fourthCol,
  fifthCol
}) {
  return (
    <thead>
      <tr>
        <th>{firstCol}</th>
        <th>{secondCol}</th>
        <th>{thirdCol}</th>
        <th>{fourthCol}</th>
        <th>{fifthCol}</th>
      </tr>
    </thead>
  );
}
