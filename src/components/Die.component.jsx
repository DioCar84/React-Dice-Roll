import React, { Component } from "react";
import "./Die.styles.css";

export class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i
          className={`Die-item fas fa-dice-${this.props.side} ${
            this.props.rolling && "Die-shaking"
          } `}
        ></i>
      </div>
    );
  }
}

export default Die;
