import React from "react";
import { InputFieldProps } from "../interface";

const InputField = ({ todo, setTodo, listTodo }: InputFieldProps) => {
  return (
    <>
      <form action="" className="text-center py-2" onSubmit={listTodo}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter Todo"
          className="py-1 px-2 border-black border-2 mr-4"
        />
        <button type="submit" className="border-2 border-black py-1 px-2">
          Go
        </button>
      </form>
    </>
  );
};

export default InputField;
