import React from "react";
import useTaskStore from "./store/useTaskStore";

const ListStatus = () => {
  const {tasks} = useTaskStore()
  return (
    <div className="flex justify-between mt-3">
      <h1 className="">Your lists</h1>
      <div className="">
        <div>
          Done{""}
          <span>
            (<span id="doneCount">{tasks.filter(task => task.isDone === true).length}</span>
            /
            <span id="allCount">{tasks.length}</span>)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListStatus;
