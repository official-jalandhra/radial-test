import React, { Component } from "react";
import delimg from "../photos/delete.png";
import done from "../photos/done.png";
import blue from "../photos/blue.png";
import date from "../photos/date.png";

import "../styles/tasklist.css";

export default class Tasklist extends Component {
  render() {
    return (
      <div className="tasklist-container">
        <div className="task-name">
          <img src={blue} alt="blue" />
          {this.props.taskName}
        </div>
        <div className="date">
          <img src={date} alt="date" />
          {this.props.date}
        </div>
        <div className="done-delete">
          <img src={done} alt="done" />
          <img src={delimg} alt="delimg" />
        </div>
      </div>
    );
  }
}
