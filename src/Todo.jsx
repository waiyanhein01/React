import CreateInputForm from "./CreateInputForm";
import Heading from "./Heading";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";
import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState([
    // {
    //   id: 1,
    //   job: "Play Football",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   job: "Learn React",
    //   isDone: true,
    // },
    // {
    //   id: 3,
    //   job: "Sleep Early",
    //   isDone: true,
    // },
    // {
    //   id: 4,
    //   job: "Smoking",
    //   isDone: false,
    // },
  ]);

  const addTask = (job) => {
    const newTask = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTask([...tasks, newTask]);
  };

  const checkTask = (id) => {
    setTask(tasks.map((task) => {
      if(id === task.id) {
        task.isDone = !task.isDone;
      }
      return task;
    }))
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id)) 
  }

  const editTask = (newJob, id) => {
    setTask(tasks.map((task) => {
      if(id === task.id) {
        task.job = newJob;
      }
      return task;
    })) 
  }
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-200">
      <div className=" border w-[450px] px-10 py-16 rounded-md bg-slate-50">
        <Heading text="Todo App" />
        <CreateInputForm addTask={addTask} />
        <ListStatus tasks={tasks} />
        <ListGroup editTask={editTask} deleteTask={deleteTask} checkTask={checkTask} tasks={tasks}/>
      </div>
    </div>
  );
};

export default Todo;
