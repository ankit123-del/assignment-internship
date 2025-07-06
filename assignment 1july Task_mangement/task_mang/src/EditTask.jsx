import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(`http://localhost:3001/tasks/${id}`);
      const task = res.data;
      setTitle(task.title);
      setDescription(task.description);
      setDate(task.date);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      title,
      description,
      date
    });
    alert('Task Updated');
    navigate('/view');
  };

  return (
    <main>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Due Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <button type="submit">Update Task</button>
      </form>
    </main>
  );
};

export default EditTask;