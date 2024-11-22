import React from "react";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, editTask } from "../redux/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleEdit = () => {
    const updatedDescription = prompt("Edit task", task.description);
    if (updatedDescription !== null && updatedDescription !== "") {
      dispatch(
        editTask({
          id: task.id,
          description: updatedDescription,
          isDone: task.isDone,
        })
      );
    }
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span>{task.description}</span>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
