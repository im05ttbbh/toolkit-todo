import React from "react";
import { useForm } from "react-hook-form";
import {
  createTask,
  editTask,
  handleModalOpen,
  selectSelectedTask,
} from "../taskSlice";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";

type TaskFormProps = {
  edit?: boolean;
};
type Inputs = {
  taskTitle: string;
};

export const TaskForm: React.FC<TaskFormProps> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };

  return (
    <div className={styles.root}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? selectedTask.title : ""}
          variant="outlined"
          {...register("taskTitle")}
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button className={styles.submit_button} type="submit">
              Submit
            </button>
            <button
              onClick={() => dispatch(handleModalOpen(false))}
              className={styles.cancel_button}
              type="button"
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};
