import {TodoRowItem} from "./TodoRowItem";
import {TodoModel} from "../models/TodoModel";

interface TodoTableProps {
  todos: TodoModel[];
  deleteTodo: (id: number) => void;
}

export const ToDoTable: React.FC<TodoTableProps> = ({ todos, deleteTodo }) => {
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
}
