import React from "react";
import EmptyList from "./EmptyList";
import Lists from "./Lists";

const ListGroup = () => {
  const tasks = [
    {
      id: 1,
      job: "Play Football",
      isDone: false,
    },
    {
      id: 2,
      job: "Learn React",
      isDone: true,
    },
    {
      id: 3,
      job: "Sleep Early",
      isDone: true,
    },
    {
      id: 4,
      job: "Smoking",
      isDone: false,
    },
  ];
  return (
    <div className="mt-3">
      <EmptyList />
      {tasks.map(task => 
      <Lists job={task.job} isDone={task.isDone}/>
      )}
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
