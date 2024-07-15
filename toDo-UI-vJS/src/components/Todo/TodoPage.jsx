import React, { useState, useEffect } from "react";
import { fetchTodos, addTodo, deleteTodo } from "../../services/todoService";
import { ToDoTable } from "./TodoTable";
import { NewTodoForm } from "./NewTodoForm";

export const TodoPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch all todos when the component mounts
    fetchTodos()
      .then(setTodos)
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const handleAddTodo = (description, assigned) => {
    addTodo(description, assigned)
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      })
      .catch((error) => {
        console.error("There was an error creating the todo!", error);
      });
  };

  const handleDeleteTodo = (todoId) => {
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
};
