import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '220px', padding: '20px', background: '#f3f4f6' }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Courses</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
        <Link to="/"><button>Logout</button></Link>
      </aside>
      <main style={{ padding: '40px', flex: 1 }}>
        <h2>Dashboard</h2>
        <p>Access your courses and track progress here.</p>
      </main>
    </div>
  );
}

export default Dashboard;
