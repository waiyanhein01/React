import React from "react";

const ListStatusLoading = () => {
  return (
    <div className=" animate-pulse flex items-center">
      (<div className=" gap-2 flex">
        <span className=" bg-neutral-500 w-10 h-3 lg:w-12 lg:h-4 rounded-md"></span>
        <span className=" bg-neutral-500 w-3 h-3 lg:w-4 lg:h-4 rounded-full"></span>
      </div>
      /
      <div className=" gap-2 flex">
        <span className=" bg-neutral-500 w-10 h-3 lg:w-12 lg:h-4 rounded-md"></span>
        <span className=" bg-neutral-500 w-3 h-3 lg:w-4 lg:h-4 rounded-full"></span>
      </div>)
    </div>
  );
};

export default ListStatusLoading;
