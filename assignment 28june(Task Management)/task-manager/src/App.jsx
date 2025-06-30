import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addOrUpdateTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, status: newStatus } : task));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>
      <TaskForm onSave={addOrUpdateTask} taskToEdit={taskToEdit} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
