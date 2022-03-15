import React, { Component } from "react";
import TaskCount from "./TaskCount";
import "../styles/tasks.css";

import completed from "../photos/completed.png";
import newProjects from "../photos/new-projects.png";
import totalTasks from "../photos/total-tasks.svg";
import updates from "../photos/updates.png";

export default class Tasks extends Component {
  tasks = [
    { title: "Total Tasks", image: totalTasks },
    { title: "Completed", image: completed },
    { title: "New Projects", image: newProjects },
    { title: "Updates", image: updates },
  ];
  taskcount = this.tasks.map((item) => {
    return <TaskCount title={item.title} image={item.image} />;
  });
  render() {
    return <div className="task-container">{this.taskcount}</div>;
  }
}
