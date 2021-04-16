import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import styles from "./TaskItem.module.scss";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import { TaskForm } from "../taskForm/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  deleteTask,
  handleModalOpen,
  selectIsModalOpen,
  selectTask,
} from "../taskSlice";

type TaskItemProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const isModalOpen = useSelector(selectIsModalOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };

  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button className={styles.edit_button} onClick={handleOpen}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          className={styles.delete_button}
          onClick={() => dispatch(deleteTask(task))}
        >
          <DeleteIcon className={styles.icon} />
        </button>
        <Modal
          open={isModalOpen}
          onClose={handleClose}
          className={styles.modal}
        >
          <div className={styles.modal_content}>
            <div className={styles.modal_title}>Edit</div>
            <TaskForm edit />
          </div>
        </Modal>
      </div>
    </div>
  );
};
