import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
