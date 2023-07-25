import React from "react";
import { TodoListProps } from "../interface";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";
import { Todo } from "../interface";

const TodoList = ({
  allTodo,
  setAllTodo,
  completedTodo,
  setCompletedTodo,
}: TodoListProps) => {
  const deleteTodo = (id: number) => {
    setAllTodo(allTodo.filter((e) => e.id !== id));
  };

  const tickTodo = (id: number) => {
    deleteTodo(id);
    const [newCompletedTodo]: Todo[] = allTodo.filter((e) => e.id == id);
    setCompletedTodo([...completedTodo, newCompletedTodo]);
  };
  console.log(completedTodo);

  return (
    <>
      <div className="my-3">
        <h1 className="text-center py-1 bg-gray-400">Active Task</h1>
        {allTodo.length > 0 ? (
          allTodo.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center w-[250px] mx-auto"
            >
              <h1>{e.todo}</h1>
              <div className="flex gap-3">
                <div>
                  <span
                    className="icons cursor-pointer"
                    onClick={() => deleteTodo(e.id)}
                  >
                    <AiFillDelete />
                  </span>
                </div>
                <div>
                  <span
                    className="icons cursor-pointer"
                    onClick={() => tickTodo(e.id)}
                  >
                    <BsCheck2All />
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No Active Task!</p>
        )}
      </div>
      <div>
        <h1 className="text-center py-1 bg-gray-400">Completed Task</h1>
        {completedTodo.length > 0 ? (
          completedTodo.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center w-[250px] mx-auto"
            >
              <h1>{e.todo}</h1>
            </div>
          ))
        ) : (
          <p className="text-center">No Completed Task!</p>
        )}
      </div>
    </>
  );
};

export default TodoList;
