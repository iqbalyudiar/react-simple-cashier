import React from "react";

export default function TableHeader({
  zeroCol,
  firstCol,
  secondCol,
  thirdCol,
  fourthCol,
  fifthCol
}) {
  return (
    <thead id="tableHeader">
      <tr>
        <th>{zeroCol}</th>
        <th>{firstCol}</th>
        <th>{secondCol}</th>
        <th>{thirdCol}</th>
        <th>{fourthCol}</th>
        <th>{fifthCol}</th>
      </tr>
    </thead>
  );
}
