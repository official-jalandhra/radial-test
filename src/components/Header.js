import React, { Component } from "react";
import "../styles/header.css";
import hello from "../photos/Hello.png";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="hello-with-name">
          <img src={hello} alt="hello" />
          <div className="name">Rahul</div>
        </div>
        <div className="button-container">
          <button>Log Out</button>
        </div>
      </div>
    );
  }
}
