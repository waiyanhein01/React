import React from "react";
import EmptyList from "./EmptyList";
import Lists from "./Lists";

const ListGroup = (props) => {
  return (
    <div className="mt-3">
      <EmptyList />
      {props.tasks.map((task) => (
        <Lists deleteTask={props.deleteTask} checkTask={props.checkTask} id={task.id} key={task.id} job={task.job} isDone={task.isDone} />
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
