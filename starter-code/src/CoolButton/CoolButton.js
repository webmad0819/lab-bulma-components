import React, { Component } from "react";
import { bulmaClasses } from "../bulmaClasses";

export default class CoolButton extends Component {
  render() {
    let bulmaKeys = ["button"];

    for (let key in this.props) {
      if (bulmaClasses[key] !== undefined) bulmaKeys.push(bulmaClasses[key]);
    }

    this.props.className
      ? (bulmaKeys = [...bulmaKeys, ...this.props.className.split(" ")])
      : null;

    return (
      <button className={bulmaKeys.join(" ")}>{this.props.children}</button>
    );
  }
}
