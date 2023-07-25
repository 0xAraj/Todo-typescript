"use client";
import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./interface";

const HomePage = () => {
  const [todo, setTodo] = useState<string>("");
  const [allTodo, setAllTodo] = useState<Todo[]>([]);
  const [completdTodo, setCompletedTodo] = useState<Todo[]>([]);

  const listTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: Math.random(),
      todo,
      isCompleted: false,
    };
    setAllTodo([...allTodo, newTodo]);
    setTodo("");
  };
  return (
    <div className="w-full min-w-fit mx-auto">
      <h1 className="text-center py-3 bg-gray-400 text-2xl font-bold">
        Todo List
      </h1>
      <InputField todo={todo} setTodo={setTodo} listTodo={listTodo} />
      <TodoList
        allTodo={allTodo}
        setAllTodo={setAllTodo}
        completedTodo={completdTodo}
        setCompletedTodo={setCompletedTodo}
      />
    </div>
  );
};

export default HomePage;
