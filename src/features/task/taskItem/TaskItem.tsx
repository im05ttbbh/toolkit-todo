import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./TaskItem.module.scss";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

type TaskItemProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          className={styles.checkbox}
        />
        <button
          className={styles.edit_button}
          onClick={() => console.log(`edit ${task.id}`)}
        >
          <EditIcon className={styles.icon} />
        </button>
        <button
          className={styles.delete_button}
          onClick={() => console.log(`delete ${task.id}`)}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
