import useSWR, { useSWRConfig } from "swr";
import CreateInputForm from "./CreateInputForm";
import Heading from "./Heading";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Todo = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { mutate } = useSWRConfig();

  const [sending,setSending] = useState(false)

  const api = import.meta.env.VITE_BASE_URL

  const { data, error, isLoading } = useSWR(
    `${api}/tasks`,
    fetcher
  );

  const todoApi = axios.create({
    baseURL: `${api}/tasks`,
    headers: {
      "Content-Type": "application/json",
    }
  })


  const addTask = async (newTask) => {
    setSending(true)
    await todoApi.post("/", newTask);
    mutate(`${api}/tasks`);
    setSending(false)
    toast.success("New List!");
    // setTask([...tasks, newTask]);
  };

  const checkTask = async (id, currentTask) => {
    await todoApi.patch(`/${id}`, {
      isDone: !currentTask,
    });
    mutate(`${api}/tasks`);
    // setTask(
    //   tasks.map((task) => {
    //     if (id === task.id) {
    //       task.isDone = !task.isDone;
    //     }
    //     return task;
    //   })
    // );
  };

  const deleteTask = async (id) => {
    await todoApi.delete(`/${id}`);
    mutate(`${api}/tasks`);
    // setTask(tasks.filter((task) => task.id !== id));
  };

  const editTask = (newJob, id) => {
    setTask(
      tasks.map((task) => {
        if (id === task.id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-neutral-600">
      <div className=" w-[350px] lg:w-[550px] px-10 py-10 rounded-md bg-black-custom overflow-y-scroll scrollable-hide">
        <Heading>Tasks Manager</Heading>
        <CreateInputForm addTask={addTask} sending={sending}/>
        <ListStatus tasks={data} isLoading={isLoading} />
        <ListGroup
          deleteTask={deleteTask}
          checkTask={checkTask}
          // checkboxLoading={checkboxLoading}
          editTask={editTask}
          tasks={data}
          isLoading={isLoading}
        />
        <Toaster position="bottom-right" reverseOrder={true} />
      </div>
    </div>
  );
};

export default Todo;
