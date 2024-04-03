import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [inpt, setInpt] = useState({ title: "", age: "" });
  console.log(inpt);
  const handleAddTodo = (e) => {
    e.preventDefault(inpt);
    dispatch(addTodo(inpt));
  };
  return (
    <div>
      <form action="" onSubmit={handleAddTodo}>
        <input
          name="title"
          type="text"
          onChange={(e) =>
            setInpt({ ...inpt, [e.target.name]: e.target.value })
          }
        />
        <input
          name="age"
          type="text"
          onChange={(e) =>
            setInpt({ ...inpt, [e.target.name]: e.target.value })
          }
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
