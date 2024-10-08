import React from "react";
import ListStatusLoading from "./ListStatusLoading";
// import useTaskStore from "./store/useTaskStore";

const ListStatus = ({ tasks, isLoading }) => {
  // const {tasks} = useTaskStore()
  return (
    <div className="flex justify-between items-center mt-3">
      <h1 className=" font-serif text-sm lg:text-xl font-bold">Your lists</h1>
      <div className=" bg-blue-500 py-1 px-2 rounded-lg text-white">
        <div className="font-mono text-sm lg:text-lg font-bold">
          {isLoading ? (
            <ListStatusLoading/>
          ) : (
            <span>
              (
              <span id="doneCount">
                Done {tasks.filter((task) => task.isDone === true).length}
              </span>
              /<span id="allCount">Total {tasks.length}</span>)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListStatus;
