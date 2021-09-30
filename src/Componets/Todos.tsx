import React from "react";

import Todo from "../models/todo";
//in <> brackets we
//you use functional components and then use angle brackets
//you then define the custom props in the brackets
//so you do an array of string as per what is inside the
//brackets

//this needs to be added to all custom comp React.FC
//for props you add the following <{ items: string[] }>
const Todos: React.FC<{
  items: Todo[];
  setTodos: (value: React.SetStateAction<Todo[]>) => void;
  onRemoveTodo: (id: string) => void;
}> = ({ children, items, setTodos, onRemoveTodo }) => {
  return (
    <ul>
      <li>{children}</li>
      {items.map((item) => (
        <TodoItem item={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

interface IProps {
  item: {
    id: string;
    text: string;
  };
  onRemoveTodo: (id: string) => void;
}
const TodoItem: React.FC<IProps> = ({ item, onRemoveTodo }) => {
  return (
    <li key={item.id} onClick={() => onRemoveTodo(item.id)}>
      {item.text}
    </li>
  );
};

export default Todos;
