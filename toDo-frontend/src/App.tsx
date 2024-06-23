import { useEffect, useState } from "react";
import "./App.css";
import {ToDoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";
import axios from "axios";
import { TodoModel } from "./models/TodoModel";

function App() {
  const BASEAPIURL = "http://localhost:8080";
  const [showAddForm, setShowAddForm] = useState(false);
 const [todos, setTodos] = useState<TodoModel[]>([]);

  // const [todos, setTodos] = useState([
  //   { rowNumber: 1, rowDescription: "Feed Dog", rowAssigned: "Leah" },
  //   { rowNumber: 2, rowDescription: "Dishwasher", rowAssigned: "Ben" },
  //   { rowNumber: 3, rowDescription: "Mow", rowAssigned: "Dad" },
  // ]);

  const fetchTodos = () => {
    axios
      .get<TodoModel[]>(BASEAPIURL + "/api/todos")
      .then((response: { data: TodoModel[] }) => {
         setTodos(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error: any) => {
        console.error("There was an error fetching the todos!", error);
      });
  };

  useEffect(() => {
    // Fetch all todos when the component mounts
    fetchTodos();
  }, []);

    const addTodo = (description: string, assigned: string) => {
      axios
        .post<TodoModel>(BASEAPIURL + "/api/todos/new", null, {
          params: {
            description: description,
            assigned: assigned,
          },
        })
        .then((response: { data: TodoModel }) => {
          setTodos([...todos, response.data]);
        })
        .catch((error: any) => {
          console.error("There was an error creating the todo!", error);
        });
    };

    const deleteTodo = (todoId: number) => {
      axios
        .post(BASEAPIURL +"/api/todos/delete", null, {
          params: { todoId: todoId },
        })
        .then(() => {
          fetchTodos();
        })
        .catch((error: any) => {
          console.error("There was an error deleting the todo!", error);
        });
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
