import React, { useState, useEffect } from "react";
import InputMenu from "./Input/InputMenu";
import InputMoney from "./Input/InputMoney";
import EditMenu from "./Edit/EditMenu";
import TableCard from "./Table/TableCard";
import TableHeader from "./Table/TableHeader";
import TableMenu from "./Table/TableMenu";
import TableFooter from "./Table/TableFooter";

import "./Menu.css";

export default function Menu() {
  // Set data
  const initialFormState = {
    id: null,
    item: "",
    price: null,
    quantity: null,
    oderTab: null
  };

  const tablesHeader = [
    {
      zero: "ID",
      first: "Item's Name",
      second: "Price",
      third: "Quantity",
      fourth: "Order's Price",
      fifth: "Action"
    }
  ];
  // const inputStyles = {
  //   border: "1px solid black"
  // };
  // const inputValidation = {
  //   border: "1px solid red"
  // };
  // const [styles, setStyles] = useState({
  //   inputStyles: {
  //     border: "1px solid black"
  //   },
  //   inputValidation: {
  //     border: "1px solid red"
  //   }
  // });

  // Setting State

  const [input, setInput] = useState({
    id: 0,
    item: "",
    price: 0,
    quantity: 0,
    money: 0
  });

  const [validation, setValidation] = useState(false);

  const [result, setResult] = useState({
    orderRes: 0
  });
  const [total, setTotal] = useState({
    totalPrice: 0,
    change: 0
  });

  const [table, setTable] = useState({
    lists: [
      { id: 1, item: "Nasi goreng", price: 12000, quantity: 2, orderTab: 24000 }
    ]
  });

  const [editing, setEditing] = useState(false);

  const [currentOrder, setCurrentOrder] = useState(initialFormState);

  // Handle Input

  const handleInput = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };
  const handleEdit = e => {
    const { name, value } = e.target;
    setCurrentOrder({
      ...currentOrder,
      [name]: value
    });
  };

  // Formula to get Order
  const addTotal = () => {
    let { price, quantity } = input;
    setResult({ orderRes: parseInt(price) * parseInt(quantity) });
  };

  const addTotalUpdate = () => {
    let { price, quantity } = currentOrder;
    setCurrentOrder({
      orderTab: parseInt(price) * parseInt(quantity)
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

  const totalOrder = () => {
    const { lists } = table;

    let getTotal = lists
      .map(total => total.orderTab)
      .reduce((sum, num) => sum + num);

    setTotal({ ...total, totalPrice: getTotal });
  };

  // CRUD
  const addOrder = () => {
    let { item, price, quantity } = input;
    // let { inputStyles, inputValidation } = styles;
    let { orderRes } = result;

    if (input.item === "") {
      setValidation(true);
    } else if (input.price === 0) {
      setValidation(true);
    } else if (input.quantity === 0) {
      setValidation(true);
    } else {
      setValidation(false);
      setTable({
        lists: [
          ...table.lists,
          {
            id: table.lists.length + 1,
            item: item,
            price: price,
            quantity: quantity,
            orderTab: orderRes
          }
        ]
      });
    }
  };

  const deleteOrder = id => {
    if (table.lists.length === 1) {
      alert("You can't delete it");
    } else {
      setTable(({ lists }) => ({
        lists: lists.filter(list => list.id !== id)
      }));
    }
  };

  const updateOrder = () => {
    setEditing(false);

    setTable(({ lists }) => ({
      lists: lists.map(list =>
        list.id === currentOrder.id ? currentOrder : list
      )
    }));
  };

  const editOrder = id => {
    const { lists } = table;

    // currentOrder.id = 0;

    setEditing(true);

    lists.map(
      order =>
        id === order.id &&
        setCurrentOrder({
          id: order.id,
          item: order.item,
          price: order.price,
          quantity: order.quantity,
          orderTab: order.orderTab
        })
    );
  };

  const closeEditing = () => {
    return setEditing(false);
  };

  // Checking

  useEffect(() => {
    addTotal();
    totalOrder();
    // addTotalUpdate();
    //return () => totalOrder();
  });

  console.log(currentOrder.OrderTab);

  // console.log(updateOrder(id));
  // console.log(updateOrder(updateOrder));

  let { item, price, quantity } = input;

  const { orderRes } = result;

  return (
    <div className="container">
      <h2 className="center">Menu</h2>

      {editing ? (
        <EditMenu
          currentOrder={currentOrder}
          result={orderRes}
          editItem={handleEdit}
          editOrder={updateOrder}
          addTotalUpdate={addTotalUpdate}
          closeEditing={closeEditing}
        />
      ) : (
        <InputMenu
          validation={validation}
          result={orderRes}
          inputItem={handleInput}
          addOrder={addOrder}
          item={item}
          price={price}
          quantity={quantity}
        />
      )}

      <TableCard>
        {/* <TableHeader
          zeroCol="ID"
          firstCol="Item's Name"
          secondCol="Price"
          thirdCol="Quantity"
          fourthCol="Order's Price"
          fifthCol="Action"
        /> */}
        {tablesHeader.map(table => {
          return (
            <TableHeader
              zeroCol={table.zero}
              firstCol={table.first}
              secondCol={table.second}
              thirdCol={table.third}
              fourthCol={table.fourth}
              fifthCol={table.fifth}
            />
          );
        })}
        {table.lists.map((list, key) => {
          return (
            <TableMenu
              key={key}
              id={list.id}
              item={list.item}
              price={list.price}
              quantity={list.quantity}
              result={list.orderTab}
              deleteOrder={() => deleteOrder(list.id)}
              editOrder={() => editOrder(list.id)}
            />
          );
        })}
        <TableFooter total={totalOrder} result={total.totalPrice} />
      </TableCard>
      <TableCard>
        {/* <TableHeader firstcol="" secondCol="" /> */}
        <InputMoney inputMoney={handleInput} process={addChange} />
        <p id="change">Your change is {total.change}</p>
      </TableCard>
    </div>
  );
}
