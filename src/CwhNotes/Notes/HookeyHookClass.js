import React, { useState, useEffect } from "react";
import { Component } from "react";
// Earlier we used CLASS to maintain state like HOOKS
export default class HookeyHookClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "red",
    };
  }

  render() {
    return (
      <>
        {/* State of Count using Class */}
        <h1>Using HookeyHookClass</h1>
        <div>
          <h3>New Value : {this.state.count}</h3>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increase
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrease
          </button>
          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
        {/* State of Color using Class */}
        <div>
          <h3>New Fav Color : {this.state.color}</h3>
          <button onClick={() => this.setState({ color: "blue" })}>Blue</button>
          <button onClick={() => this.setState({ color: "green" })}>
            Green
          </button>
          <button onClick={() => this.setState({ color: "yellow" })}>
            Yellow
          </button>
          <button onClick={() => this.setState({ color: "red" })}>Red</button>
        </div>
      </>
    );
  }
}
