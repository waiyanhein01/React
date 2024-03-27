const Todo = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <div className=" border border-gray-500 p-5 rounded-md">
        <h1 className=" font-bold text-2xl ">Todo App</h1>
        <div className=" mt-3">
          <input
            type="text"
            className="border border-gray-900 rounded-md p-1 ps-3"
            placeholder="Enter your lists"
          />
          <button className=" bg-blue-500 px-4 py-1 rounded-md ms-4 text-white">
            Add
          </button>
        </div>
        <div className="mt-3 ms-6">
          <ul className=" list-disc">
            <li>Book to read</li>
            <li>Time to study</li>
            <li>Kiss to ass</li>     
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
