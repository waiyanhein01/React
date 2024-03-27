const Todo = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-200">
      <div className=" border w-[450px] px-10 py-16 rounded-md bg-slate-50">
        <h1 className=" font-bold text-2xl ">Todo App</h1>
        <div className=" mt-3 flex">
          <input
            type="text"
            className="border border-gray-900 py-1 ps-3 w-full"
            placeholder="Enter your lists"
          />
          <button className=" bg-gray-500 px-2 py-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between mt-3">
            <h1 className="">Your lists</h1>
            <div className="">
                <h1>Done <span>(0/0)</span></h1>
            </div>
        </div>
        <div className="mt-3 flex flex-col gap-3 items-center justify-center">
            <img src="./src/assets/empty.svg" className=" w-40" alt="" />
            <h1 className="">There is no lists.</h1>
          {/* <ul className=" list-disc">
            <li>Book to read</li>
            <li>Time to study</li>
            <li>Kiss to ass</li>         
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
