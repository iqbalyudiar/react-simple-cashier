import React, { useState, useEffect } from "react";
import InputMenu from "./Input/InputMenu";
import InputMoney from "./Input/InputMoney";
import EditMenu from "./EditMenu";
import TableCard from "./Table/TableCard";
import TableHeader from "./Table/TableHeader";
import TableMenu from "./Table/TableMenu";
import TableFooter from "./Table/TableFooter";

export default function Menu() {
  // Setting State
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
      { id: 1, item: "Nasi goreng", price: 12000, quantity: 2, orderTab: 24000 }
    ]
  });

  const initialFormState = {
    id: null,
    item: "",
    price: null,
    quantity: null,
    oderTab: null
  };
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
    const { list } = table;

    let getTotal = list
      .map(total => total.orderTab)
      .reduce((sum, num) => sum + num);

    setTotal({ ...total, totalPrice: getTotal });
  };

  // CRUD
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

  const deleteOrder = indexDelete => {
    if (table.list.length === 1) {
      alert("You can't delete it");
    } else {
      setTable(({ list }) => ({
        list: list.filter((lists, index) => index !== indexDelete)
      }));
    }
  };

  const updateOrder = (id, updateOrder) => {
    setEditing(false);

    setTable(({ list }) => ({
      list: list.map(lists => (lists.id === id ? updateOrder : lists))
    }));
  };

  const editOrder = () => {
    const { list } = table;

    // currentOrder.id = 0;

    setEditing(true);

    list.map(orders =>
      setCurrentOrder({
        id: orders.id,
        item: orders.item,
        price: orders.price,
        quantity: orders.quantity,
        orderTab: orders.orderTab
      })
    );
  };

  const closeEditing = () => {
    return setEditing(false);
  };

  useEffect(() => {
    addTotal();
    totalOrder();
    //return () => totalOrder();
  });

  const { orderRes } = result;

  return (
    <div>
      {editing ? (
        <EditMenu
          currentOrder={currentOrder}
          result={orderRes}
          editItem={handleEdit}
          editOrder={updateOrder}
          closeEditing={closeEditing}
        />
      ) : (
        <InputMenu
          result={orderRes}
          inputItem={handleInput}
          addOrder={addOrder}
        />
      )}

      <TableCard>
        <TableHeader
          zeroCol="ID"
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
              id={lists.id}
              item={lists.item}
              price={lists.price}
              quantity={lists.quantity}
              result={lists.orderTab}
              deleteOrder={deleteOrder.bind(this, key)}
              editOrder={editOrder.bind(this, key)}
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
