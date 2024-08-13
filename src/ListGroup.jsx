import React from "react";
import EmptyList from "./EmptyList";
import Lists from "./Lists";
import useTaskStore from "./store/useTaskStore";

const ListGroup = () => {
  const {tasks} = useTaskStore()
  return (
    <div className="mt-3">
      <EmptyList />
      {tasks.map((task) => (
        <Lists task={task} key={task.id} />
      ))}
      {/* {tasks.map((task) => (
        <div className={`${task.isDone && "opacity-40"} border border-gray-300 mb-3 p-2`} key={task.id}>
            <p>{task.id} | {task.isDone ? "Done" : "Not yet"}</p>
            <p>{task.job}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ListGroup;
