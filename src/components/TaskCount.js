import React, { Component } from "react";
import "../styles/taskCount.css";
export default class TaskCount extends Component {
  render() {
    return (
      <div>
        <div className="taskcount-container">
          <div>
            <div className="task-name">{this.props.title}</div>
            <div className="counts">100</div>
          </div>
          <div className="img-container">
            <img src={this.props.image} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}
