import useSWR, { useSWRConfig } from "swr";
import CreateInputForm from "./CreateInputForm";
import Heading from "./Heading";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const Todo = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { mutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/tasks",
    fetcher
  );

  const addTask = async (newTask) => {
    await axios.post("http://localhost:5000/tasks", newTask);
    mutate("http://localhost:5000/tasks");
    // setTask([...tasks, newTask]);
  };

  const checkTask = async (id, currentTask) => {
    await axios.patch(`http://localhost:5000/tasks/${id}`, {
      isDone: !currentTask,
    });
    mutate("http://localhost:5000/tasks");
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
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    mutate("http://localhost:5000/tasks");
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
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-800">
      <div className=" border w-[350px] lg:w-[550px] px-10 py-10 rounded-md bg-slate-50 overflow-y-scroll">
        <Heading>Tasks Manager</Heading>
        <CreateInputForm addTask={addTask} />

        <ListStatus tasks={data} isLoading={isLoading} />
        <ListGroup
          deleteTask={deleteTask}
          checkTask={checkTask}
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
