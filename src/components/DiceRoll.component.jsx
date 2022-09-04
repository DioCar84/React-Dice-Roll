import React, { Component } from "react";
import Die from "./Die.component";
import "./DiceRoll.styles.css";

class DiceRoll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.roll = this.roll.bind(this);
    this.state = {
      die1: { face: "one" },
      die2: { face: "two" },
      isRolling: false,
    };
  }

  roll() {
    const die1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const die2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    this.setState({
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({
        die1: { face: die1 },
        die2: { face: die2 },
        isRolling: false,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="DiceRoll">
        <div className="DiceRoll-container">
          <Die side={this.state.die1.face} rolling={this.state.isRolling} />
          <Die side={this.state.die2.face} rolling={this.state.isRolling} />
        </div>

        <button disabled={this.state.isRolling} onClick={this.roll}>
          {this.state.isRolling ? "Rolling Dice..." : "Click me to Roll!"}
        </button>
      </div>
    );
  }
}

console.log(DiceRoll.randIdx);

export default DiceRoll;
