import React from 'react';

function TaskItem({ task, onDelete, onEdit, onChangeStatus }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: <strong>{task.priority}</strong></p>
      <p>Status: <strong>{task.status}</strong></p>
      <button onClick={() => onEdit(task)}>✏️ Edit</button>
      <button onClick={() => onDelete(task.id)}>🗑 Delete</button>
      <select
        value={task.status}
        onChange={(e) => onChangeStatus(task.id, e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}

export default TaskItem;
