import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteTask = async () => {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      alert('Task deleted');
      navigate('/view');
    };
    deleteTask();
  }, [id, navigate]);

  return (
    <main>
      <h2>Deleting Task...</h2>
    </main>
  );
};

export default DeleteTask;
