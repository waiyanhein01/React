import React, { useState } from "react";
import toast from "react-hot-toast";
import useTaskStore from "./store/useTaskStore";

const CreateInputForm = () => {
  const [text, setText] = useState("");

  const { addTask } = useTaskStore();

  const textInputHandler = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const newTask = {
    id: Date.now(),
    job: text,
    isDone: false,
  };

  const addBtnHandler = () => {
    addTask(newTask);
    setText("");
    toast.success("New List!");
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      addTask(newTask);
      setText("");
      toast.success("New List!");
    }
  };

  return (
    <div className=" mt-3 flex">
      <input
        type="text"
        className="border border-gray-900 py-1 ps-3 w-full"
        placeholder="Enter your lists"
        value={text}
        onChange={textInputHandler}
        onKeyUp={enterHandler}
      />
      <button
        onClick={addBtnHandler}
        className=" bg-neutral-900 px-2 py-1 text-white"
      >
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
  );
};

export default CreateInputForm;
