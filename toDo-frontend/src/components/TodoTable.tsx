import {TodoRowItem} from "./TodoRowItem";
import {TodoModel} from "../models/TodoModel";

interface TodoTableProps {
  todos: TodoModel[];
  deleteTodo: (rowNumber: number) => void;
}

export const ToDoTable: React.FC<TodoTableProps> = ({ todos, deleteTodo }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}
