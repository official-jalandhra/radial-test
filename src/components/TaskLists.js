import React, { Component } from "react";
import TaskList from "./Tasklist";
import "../styles/tasklists.css";

export default class TaskLists extends Component {
  date = new Date();
  taskDate = this.date.getDate();
  tasklistArray = [
    { title: "First project", date: this.taskDate },
    { title: "First project", date: this.taskDate },
    { title: "First project", date: this.taskDate },
  ];
  tasklist = this.tasklistArray.map((item) => {
    return <TaskList taskName={item.title} date={item.date} />;
  });

  render() {
    return (
      <div className="tasklists-container">
        Today's Tasks
        {this.tasklist}
      </div>
    );
  }
}
