import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div
      className="dashboard-container"
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar />

      <div style={{ display: 'flex', flex: 1}}>
          <Sidebar />

        <div
          style={{flex: 1,padding: '20px',overflowY: 'auto',backgroundColor: '#f5f5f5',}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

