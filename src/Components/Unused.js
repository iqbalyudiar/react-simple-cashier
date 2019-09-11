import React, { Component } from "react";

import TableMenu from "./TableMenu";

class InputMenu extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      price: 0,
      quantity: 0,
      order: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // handleChange = e => {
  //   this.setState({ price: e.target.value, quantity: e.target.value });
  // };
  handleChange = e => {
    let { name, value } = e.target;
    // let { list } = this.state;
    let { price, quantity } = this.state;
    this.setState({
      [name]: value,
      order: parseInt(price) * parseInt(quantity)
    });
  };

  addTotal = () => {
    let { price, quantity } = this.state;
    this.setState({ order: parseInt(price) * parseInt(quantity) });
  };

  handleKeyPress = e => {
    let { order } = this.state.list[0];
    if (order !== "") {
      if (e.key === "Enter") {
        this.addOrder();
      }
    }
  };

  addOrder() {
    this.setState({});
  }

  render() {
    // console.log(this.state.list[0].price);
    // console.log(this.state.list[0].quantity);
    // console.log(this.state.list[0].quantity);
    // console.log(this.state.list.order);
    let order = this.state.order;
    return (
      <div>
        <input id="item" type="text" placeholder="Enter Your Order" />
        <input
          name="price"
          type="text"
          placeholder="Enter Your Price"
          onChange={this.handleChange}
        />
        <input
          name="quantity"
          type="text"
          placeholder="Enter Your Quantity"
          onChange={this.handleChange}
        />
        <input readOnly id="order" type="text" value={order} />
        <button onClick={this.addTotal}>Total</button>
        <button id="entry">Add Order</button>

        <TableMenu />
      </div>
    );
  }
}

export default InputMenu;
