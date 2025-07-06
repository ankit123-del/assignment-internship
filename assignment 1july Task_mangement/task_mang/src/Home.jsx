// src/Home.jsx

import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then((res) => setTasks(res.data.slice(-3))) 
      .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  return (
    <main>
      <h2>Welcome to Task Manager</h2>
      <p>Manage your tasks efficiently with this simple system.</p>

      <section className="task-section">
        <h3>Recent Tasks</h3>
        {tasks.length === 0 ? (
          <p>No recent tasks.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p><strong>Due:</strong> {task.date}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
