import { useState, useEffect } from "react";
import "./App.css";
import { ToDoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoModel } from "./models/TodoModel";
import { fetchTodos, addTodo, deleteTodo } from "./services/todoService"

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [todos, setTodos] = useState<TodoModel[]>([]);

  useEffect(() => {
    // Fetch all todos when the component mounts
    fetchTodos()
      .then(setTodos)
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const handleAddTodo = (description: string, assigned: string) => {
    addTodo(description, assigned)
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
      .catch((error) => {
        console.error("There was an error creating the todo!", error);
      });
  };

  const handleDeleteTodo = (todoId: number) => {
    deleteTodo(todoId)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
      })
      .catch((error) => {
        console.error("There was an error deleting the todo!", error);
      });
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={handleDeleteTodo} />
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary"
          >
            {showAddForm ? "Close Form" : "New Todo"}
          </button>
          {showAddForm && <NewTodoForm addTodo={handleAddTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
