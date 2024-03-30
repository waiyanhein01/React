import React from "react";

const ListStatus = () => {
  return (
    <div className="flex justify-between mt-3">
      <h1 className="">Your lists</h1>
      <div className="">
        <h1>
          Done <span>(0/0)</span>
        </h1>
      </div>
    </div>
  );
};

export default ListStatus;
