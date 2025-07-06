import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Task Manager</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add Task</Link></li>
      <li><Link to="/view">View Tasks</Link></li>
    </ul>
  </nav>
);

export default Navbar;