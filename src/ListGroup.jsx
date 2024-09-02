import React from "react";
import EmptyList from "./EmptyList";
import Lists from "./Lists";
import ListLoading from "./ListLoading";
// import useTaskStore from "./store/useTaskStore";

const ListGroup = ({ tasks, isLoading,checkTask,deleteTask }) => {
  // const {tasks} = useTaskStore()
  return (
    <div className="mt-3">
      {isLoading ? (
        <ListLoading/>
      ) : (
        <div className="">
          <EmptyList />
          {tasks.map((task) => (
            <Lists deleteTask={deleteTask} checkTask={checkTask} task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListGroup;
