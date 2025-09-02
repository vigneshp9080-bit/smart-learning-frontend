import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '220px', borderRight: '1px solid #ccc', padding: '20px', backgroundColor: '#f3f4f6' }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>Courses</li>
          <li style={{ margin: '10px 0' }}>Profile</li>
          <li style={{ margin: '10px 0' }}>Settings</li>
        </ul>
        <Link to="/"><button>Logout</button></Link>
      </aside>
      <main style={{ padding: '40px', flex: 1 }}>
        <h2>Welcome to your Dashboard!</h2>
        <p>Here you can access all your courses and track your learning progress.</p>
      </main>
    </div>
  );
}

export default Dashboard;
