import React from "react";

const ListLoading = () => {
  return (
    <div className="bg-gray-50 rounded-lg flex justify-between items-center border border-zinc-700 p-3 mt-3 mb-3 duration-200">
      <div className=" gap-2 flex">
        <span className=" bg-neutral-500 w-3 h-3 lg:w-4 lg:h-4 rounded"></span>
        <span className=" bg-neutral-500 w-32 h-3 lg:w-40 lg:h-4 rounded-md"></span>
        <span className=" bg-neutral-500 w-3 h-3 lg:w-4 lg:h-4 rounded-full"></span>
      </div>
    </div>
  );
};

export default ListLoading;
