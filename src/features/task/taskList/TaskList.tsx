import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../taskSlice";
import { TaskItem } from "../taskItem/TaskItem";
import styles from "./TaskList.module.scss";

type TaskListProps = {};

export const TaskList: React.FC<TaskListProps> = (props) => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
};
