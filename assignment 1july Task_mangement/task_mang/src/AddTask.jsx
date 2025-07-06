import { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/tasks', {
      title,
      description,
      date
    });
  };
   return (
    <main>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Due Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <button type="submit">Add Task</button>
      </form>
    </main>
  );
};

export default AddTask;