import React from "react";

const ListStatus = (props) => {
  return (
    <div className="flex justify-between mt-3">
      <h1 className="">Your lists</h1>
      <div className="">
        <div>
          Done{""}
          <span>
            (<span id="doneCount">{props.tasks.filter(task => task.isDone === true).length}</span>
            /
            <span id="allCount">{props.tasks.length}</span>)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListStatus;
