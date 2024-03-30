import CreateInputForm from "./CreateInputForm";
import Heading from "./Heading";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";
import React from 'react'

const Todo = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-200">
      <div className=" border w-[450px] px-10 py-16 rounded-md bg-slate-50">
        <Heading text="Todo App" />
        <CreateInputForm />
        <ListStatus />
        <ListGroup/>
      </div>
    </div>
  );
};

export default Todo;
