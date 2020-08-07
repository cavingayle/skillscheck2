import React from "react";
import axios from "axios";
import "./App.css";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selected: {},
      toggle: false,
    };
    this.getInventory = this.getInventory.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setSelected = this.setSelected.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get("/api/inventory").then((res) => {
      this.setState({
        inventory: res.data,
      });
    });
  };

  toggle = () => {
    console.log("TOGGLING");
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  setSelected = (id) => {
    const selected = this.state.inventory.filter(prod => prod.id === id)
    this.setState({
  selected
    })
    this.toggle()
  }

  render() {
    const { inventory, selected } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          toggle={this.state.toggle}
          toggler={this.toggle}
          getInventory={this.getInventory}
          selected={selected}
        />
        <Dashboard
          setSelected={this.setSelected}
          toggle={this.toggle}
          getInventory={this.getInventory}
          inventory={inventory}
        />
      </div>
    );
  }
}

export default App;
