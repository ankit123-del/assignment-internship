import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3001/tasks');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <main>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr><th>Title</th><th>Description</th><th>Due</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>
                <Link to={`/edit/${task.id}`}>Edit</Link> |
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ViewTasks;