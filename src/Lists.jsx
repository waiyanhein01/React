import React, { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import InputEdit from "./InputEdit";
import { square } from "ldrs";
// import useTaskStore from "./store/useTaskStore";

const Lists = ({
  task: { id, job, isDone },
  checkTask,
  deleteTask,
  // checkboxLoading,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState(job);
  const [checkboxLoading, setCheckboxLoading] = useState(false);

  square.register();

  // const {removeTask,doneTask} = useTaskStore()

  const checkBoxHandler = async () => {
    // doneTask(id);
    // await checkTask(id,isDone);
    setCheckboxLoading(true);
    await checkTask(id, isDone);
    setCheckboxLoading(false);
  };

  const delBtnHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        await deleteTask(id);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // removeTask(id);
        toast.success("List Deleted!");
      }
    });
  };

  const editBtnHandler = () => {
    setIsEdit(true);
  };

  const editInputText = (event) => {
    setInputText(event.target.value);
  };

  const editInputTextUpdate = (event) => {
    if (event.key === "Enter") {
      // console.log("Update")
      props.editTask(inputText, props.id);
      setIsEdit(false);
    }
  };

  const date = new Date();

  return (
    <div>
      <div
        className={`list list-Group animate__animated animate__bounceIn bg-gray-50 overflow-hidden rounded-lg flex justify-between items-center border border-blue-500 p-3 mt-3 mb-3 duration-200 ${
          isDone ? "bg-gray-200 opacity-60 scale-95" : " bg-gray-50"
        } `}
      >
        <div className="flex gap-3 items-center">
          {checkboxLoading ? (
            <l-square
              size="13"
              stroke="3"
              stroke-length="0.25"
              bg-opacity="0.1"
              speed="1.5"
              color="#3b82f6"
            ></l-square>
          ) : (
            <input
              className="list-check-box accent-blue-500 check-list-group"
              type="checkbox"
              name="check-box"
              id="checkBox"
              checked={isDone}
              onChange={checkBoxHandler}
              // disabled={isEdit}
              disabled={checkboxLoading}
            />
          )}

          {isEdit ? (
            <InputEdit
              editInputTextUpdate={editInputTextUpdate}
              editInputText={editInputText}
              inputText={inputText}
            />
          ) : (
            <div className="">
              <h1
                className={` ${isDone && "line-through"} list-text`}
                htmlFor="checkBox"
              >
                {job}
              </h1>
              <h2 className=" text-sm text-neutral-400">{date.toLocaleString().slice(0,8)}</h2>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {/* <button
            onClick={editBtnHandler}
            className="list-edit-btn p-2 border border-neutral-500 rounded-full active:scale-75 duration-200"
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
          </button> */}
          <button
            onClick={delBtnHandler}
            className="list-del-btn text-red-500 active:scale-75 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 pointer-events-none"
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
