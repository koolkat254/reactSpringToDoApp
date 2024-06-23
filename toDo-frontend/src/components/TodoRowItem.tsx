import React from "react";
import {TodoModel} from "../models/TodoModel";


interface TodoRowItemProps {
  todo: TodoModel;
  deleteTodo: (rowNumber: number) => void;
}

export const TodoRowItem: React.FC<TodoRowItemProps> = ({ todo, deleteTodo }) => {
  return (
    <tr onClick={() => deleteTodo(todo.rowNumber)}>
      <th scope="row">{todo.rowNumber}</th>
      <td>{todo.rowDescription}</td>
      <td>{todo.rowAssigned}</td>
    </tr>
  );
};

