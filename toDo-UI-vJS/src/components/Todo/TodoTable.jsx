import React from "react";
import { TodoRowItem } from "./TodoRowItem";

export const ToDoTable = ({ todos, deleteTodo }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRowItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </tbody>
    </table>
  );
};
