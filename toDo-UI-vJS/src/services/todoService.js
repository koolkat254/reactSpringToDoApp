import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${BASEAPIURL}/api/todos`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the todos!", error);
    throw error;
  }
};

export const addTodo = async (description, assigned) => {
  try {
    const response = await axios.post(`${BASEAPIURL}/api/todos/new`, null, {
      params: { description, assigned },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the todo!", error);
    throw error;
  }
};

export const deleteTodo = async (todoId) => {
  try {
    await axios.post(`${BASEAPIURL}/api/todos/delete`, null, {
      params: { todoId },
    });
  } catch (error) {
    console.error("There was an error deleting the todo!", error);
    throw error;
  }
};
