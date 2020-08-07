import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgurl: "",
      selectedId: null,
    };
  }

  addProduct = () => {
    const { getInventory } = this.props;
    const { name, price, imgurl } = this.state;
    axios.post("api/product", { name, price, imgurl }).then(() => {
      getInventory();
      this.setState({
        name: "",
        price: 0,
        imgurl: "",
      });
    });
  };

  universalHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cancelClearInputs = () => {
    this.props.toggle && this.props.toggler();

    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.selected.id !== prevProps.selected.id) {
      this.setState({
        name: this.props.selected.name,
        price: this.props.selected.price,
        imgurl: this.props.selected.imgurl,
        selectedId: this.props.selected.id,
      });
    }
  }

  render() {
    const { name, price, imgurl } = this.state;
    return (
      <div>
        <div className="form">
          <div>
            Name:{" "}
            <input
              onChange={this.universalHandler}
              name="name"
              type="text"
              value={name}
            />{" "}
          </div>
          <div>
            Price:{" "}
            <input
              onChange={this.universalHandler}
              name="price"
              type="text"
              value={price}
            />
          </div>

          <div>
            {" "}
            Image:{" "}
            <input
              onChange={this.universalHandler}
              name="imgurl"
              type="text"
              value={imgurl}
            />
          </div>

          <div className="form-buttons">
            <button onClick={this.cancelClearInputs}>Cancel</button>
            {this.props.toggle ? (
              <button>SaveChanges</button>
            ) : (
              <button onClick={this.addProduct}>Add To Inventory</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
