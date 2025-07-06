import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
import AddTask from './AddTask';
import ViewTasks from './ViewTasks';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/view" element={<ViewTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;