import React, { useState, useEffect } from "react";
import InputMenu from "./Input/InputMenu";
import InputMoney from "./Input/InputMoney";
import TableCard from "./Table/TableCard";
import TableHeader from "./Table/TableHeader";
import TableMenu from "./Table/TableMenu";
import TableFooter from "./Table/TableFooter";

export default function Menu() {
  const [input, setInput] = useState({
    id: 0,
    item: "",
    price: 0,
    quantity: 0,
    money: 0
  });
  const [result, setResult] = useState({
    orderRes: 0
  });
  const [total, setTotal] = useState({
    totalPrice: 0,
    change: 0
  });

  const [table, setTable] = useState({
    list: [
      { id: 0, item: "Nasi goreng", price: 12000, quantity: 2, orderTab: 24000 }
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

  const addChange = () => {
    let { totalPrice } = total;
    let { money } = input;

    if (money === " " || money === 0) {
      return alert("input your money");
    } else if (money < totalPrice) {
      return alert("Please add more money");
    } else {
      setTotal({
        change: money - totalPrice
      });
    }
  };

  const deleteOrder = indexDelete => {
    if (table.list.length === 1) {
      alert("You can't delete it");
    } else {
      setTable(({ list }) => ({
        list: list.filter((lists, index) => index !== indexDelete)
      }));
    }
  };

  const totalOrder = () => {
    const { list } = table;

    let getTotal = list
      .map(total => total.orderTab)
      .reduce((sum, num) => sum + num);

    setTotal({ ...total, totalPrice: getTotal });
  };

  useEffect(() => {
    addTotal();
    totalOrder();
    //return () => totalOrder();
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
        <TableHeader
          firstCol="Item's Name"
          secondCol="Price"
          thirdCol="Quantity"
          fourthCol="Order's Price"
          fifthCol="Action"
        />
        {table.list.map((lists, key) => {
          return (
            <TableMenu
              key={key}
              item={lists.item}
              price={lists.price}
              quantity={lists.quantity}
              result={lists.orderTab}
              deleteOrder={deleteOrder.bind(this, key)}
            />
          );
        })}
        <TableFooter total={totalOrder} result={total.totalPrice} />
      </TableCard>
      <TableCard>
        <TableHeader firstcol="" secondCol="" />
        <InputMoney inputMoney={handleInput} process={addChange} />
        <p>Your change is {total.change}</p>
      </TableCard>
    </div>
  );
}
