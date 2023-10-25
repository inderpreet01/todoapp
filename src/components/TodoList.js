import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onToggleComplete, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggleComplete={() => onToggleComplete(task.id)}
          onEdit={(newText) => onEdit(task.id, newText)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
