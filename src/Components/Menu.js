import React, { useState, useEffect } from "react";
import InputMenu from "./Input/InputMenu";
import TableCard from "./Table/TableCard";
import TableHeader from "./Table/TableHeader";
import TableMenu from "./Table/TableMenu";
import TableFooter from "./Table/TableFooter";

export default function Menu() {
  const [input, setInput] = useState({
    id: 0,
    item: "",
    price: 0,
    quantity: 0
  });
  const [result, setResult] = useState({
    orderRes: 0
  });

  const [table, setTable] = useState({
    list: [
      { id: 0, item: "Nasi Goreng", price: 12000, quantity: 2, orderTab: 24000 }
    ]
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };
  const addTotal = () => {
    let { price, quantity } = input;
    setResult({ orderRes: parseInt(price) * parseInt(quantity) });
  };

  const addOrder = () => {
    let { item, price, quantity } = input;
    let { orderRes } = result;
    setTable({
      list: [
        ...table.list,
        { item: item, price: price, quantity: quantity, orderTab: orderRes }
      ]
    });
  };

  useEffect(() => {
    addTotal();
  });

  const { orderRes } = result;

  return (
    <div>
      <InputMenu
        result={orderRes}
        inputItem={handleInput}
        addOrder={addOrder}
      />

      <TableCard>
        <TableHeader />
        {table.list.map((lists, key) => {
          return (
            <TableMenu
              key={key}
              item={lists.item}
              price={lists.price}
              quantity={lists.quantity}
              result={lists.orderTab}
            />
          );
        })}
        <TableFooter />
      </TableCard>
    </div>
  );
}
