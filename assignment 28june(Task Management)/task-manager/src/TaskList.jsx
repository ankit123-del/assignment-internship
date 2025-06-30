import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit, onChangeStatus }) {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
