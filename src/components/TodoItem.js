import React from 'react';

function TodoItem({ task, onDelete, onToggleComplete }) {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete()}>{task.text}</span>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
