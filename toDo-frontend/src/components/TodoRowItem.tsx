import React from "react";
import {TodoModel} from "../models/TodoModel";


interface TodoRowItemProps {
  todo: TodoModel;
  deleteTodo: (rowNumber: number) => void;
}

export const TodoRowItem: React.FC<TodoRowItemProps> = ({ todo, deleteTodo }) => {
  return (
    <tr key={todo.id}>
      <th scope="row">{todo.id}</th>
      <td>{todo.description}</td>
      <td>{todo.assigned}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

