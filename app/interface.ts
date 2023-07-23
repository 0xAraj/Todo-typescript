export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}
export interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  listTodo: (e: React.SyntheticEvent) => void;
}

export interface TodoListProps {
  allTodo: Todo[];
  setAllTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodo: Todo[];
  setCompletedTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
