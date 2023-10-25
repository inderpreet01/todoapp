import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: taskIdCounter,
        text,
        completed: false,
      },
    ]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">To-Do List</h1>
        <TodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
