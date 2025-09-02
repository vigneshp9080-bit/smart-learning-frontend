import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div>
      <Navbar isDashboard={true} />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ padding: '40px', flex: 1 }}>
          <h2>Welcome to your Dashboard!</h2>
          <p>Access your courses and track your learning progress.</p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
