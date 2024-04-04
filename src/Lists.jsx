import React, { useState } from "react";

const Lists = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(props.job)

  const checkBoxHandler = () => {
    props.checkTask(props.id);
  };

  const delBtnHandler = () => {
    if (confirm("Are u sure to delete?")) {
      props.deleteTask(props.id);
    }
  };

  const editBtnHandler = () => {
    setIsEdit(true);
  };

  const editInputText = (event) => {
     setInputText(event.target.value);
  }

  const editInputTextUpdate = (event) => {
     if(event.key === "Enter") {
      // console.log("Update")
      props.editTask(inputText, props.id)
      setIsEdit(false);
     }
  }

  return (
    <div>
      <div
        id
        className={`list group list-Group animate__animated animate__bounceIn bg-gray-50 overflow-hidden flex justify-between items-center border border-zinc-700 p-3 mt-3 mb-3 duration-200 ${
          props.isDone
            ? "bg-gray-200 opacity-60 scale-95 pointer-events-none"
            : " bg-gray-50"
        } `}
      >
        <div id className="flex gap-2 items-center">
          <input
            className="list-check-box accent-zinc-900 check-list-group"
            type="checkbox"
            name="check-box"
            id="checkBox"
            checked={props.isDone}
            onChange={checkBoxHandler}
            disabled = {isEdit}
          />

          {isEdit ? (
            <input onKeyUp={editInputTextUpdate} onChange={editInputText} value={inputText} className="border border-gray-300" />
          ) : (
            <h1
              className={` ${props.isDone && "line-through"} list-text`}
              htmlFor="checkBox"
            >
              {props.job}
            </h1>
          )}
        </div>
        <div className="flex gap-2 translate-x-[120%] group-hover:translate-x-0 duration-300">
          <button
            onClick={editBtnHandler}
            className="list-edit-btn border border-zinc-700 px-2 py-1 active:scale-75 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            onClick={delBtnHandler}
            className="list-del-btn border border-zinc-700 px-2 py-1 active:scale-75 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lists;
