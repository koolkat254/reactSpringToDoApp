import React from "react";

export const TodoRowItem = ({ todo, deleteTodo }) => {
  return (
    <tr key={todo.id}>
      <th scope="row">{todo.id}</th>
      <td>{todo.description}</td>
      <td>{todo.assigned}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
