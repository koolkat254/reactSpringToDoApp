import { useState } from "react";
import "./App.css";
import {ToDoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed Dog", rowAssigned: "Leah" },
    { rowNumber: 2, rowDescription: "Dishwasher", rowAssigned: "Ben" },
    { rowNumber: 3, rowDescription: "Mow", rowAssigned: "Dad" },
  ]);

  const addTodo = (description:string, assigned:string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber:number) => {
    let filteredTodos = todos.filter((value) => {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filteredTodos);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn btn-primary"
          >
            {showAddForm ? "Close Form" : "New Todo"}
          </button>
          {showAddForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
