import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setFilter } from "../redux/tasksSlice";
import Task from "./Task";

const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("done"))}>Done</button>
        <button onClick={() => dispatch(setFilter("not-done"))}>
          Not Done
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ListTask;
