import React, { useState } from "react";
import toast from "react-hot-toast";
// import useTaskStore from "./store/useTaskStore";
import { lineSpinner } from "ldrs";

const CreateInputForm = ({ addTask, sending }) => {
  const [text, setText] = useState("");

  lineSpinner.register();

  // const { addTask } = useTaskStore();

  const textInputHandler = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const newTask = {
    // id: Date.now(),
    job: text,
    isDone: false,
  };

  const addBtnHandler = () => {
    if (text.trim()) {
      addTask(newTask);
      setText("");
    } else {
      toast.error("Please enter list!");
    }
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      addTask(newTask);
      setText("");
      toast.success("New List!");
    }
  };

  return (
    <div className=" mt-3 flex border border-blue-500 rounded-lg overflow-hidden">
      <input
        type="text"
        className=" py-2 ps-3 lg:w-96 w-48 overflow-hidden disabled:cursor-not-allowed disabled:opacity-30"
        placeholder="Enter your list"
        value={text}
        onChange={textInputHandler}
        onKeyUp={enterHandler}
        disabled={sending}
      />
      <button
        onClick={addBtnHandler}
        disabled={sending}
        className=" bg-blue-500 px-2 py-2 text-white flex justify-center items-center flex-grow disabled:cursor-not-allowed disabled:opacity-30"
      >
        {sending ? (
          <l-line-spinner
            size="20"
            stroke="3"
            speed="1"
            color="white"
          ></l-line-spinner>
        ) : (
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
        )}
      </button>
    </div>
  );
};

export default CreateInputForm;
