import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://railway.com/project/13352e78-6df6-4f3e-ad87-6b6d606ee694"; 

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos`);
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    if (newTodo.trim()) {
      try {
        await axios.post(`${API_URL}/todos`, { task: newTodo });
        setNewTodo("");
        fetchTodos(); 
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  const deleteTodo = async (task) => {
    try {
      await axios.delete(`${API_URL}/todos/${task}`);
      fetchTodos(); // Refresh list
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task}
            <button onClick={() => deleteTodo(todo.task)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
