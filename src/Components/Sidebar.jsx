import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTachometerAlt, FaTasks, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div
      className="d-flex flex-column text-white p-3 vh-80"
      style={{
        width: '220px',
        backgroundColor: '#004d40' 
      }}
    >
      <div className="mb-4">
        <FaBars className="fs-4 mb-3" style={{ cursor: 'pointer' }} />
      </div>

      <nav className="flex-grow-1">
        <ul className="nav flex-column gap-3">
          <li className="nav-item">
            <Link to="minidash" className="nav-link text-white fw-bold d-flex align-items-center">
              <FaTachometerAlt className="me-2 fs-5" />
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to="task" className="nav-link text-white fw-bold d-flex align-items-center">
              <FaTasks className="me-2 fs-5" />
              Task
            </Link>
          </li>

          <li className="nav-item">
            <Link to="team" className="nav-link text-white fw-bold d-flex align-items-center">
              <FaUsers className="me-2 fs-5" />
              Team
            </Link>
          </li>

          <li className="nav-item">
            <Link to="account" className="nav-link text-white fw-bold d-flex align-items-center">
              <FaCog className="me-2 fs-5" />
              Account
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <button
          onClick={handleLogout}
          className="nav-link text-white fw-bold d-flex align-items-center mt-4 bg-transparent border-0 p-0"
          style={{ cursor: 'pointer' }}
        >
          <FaSignOutAlt className="me-2 fs-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
