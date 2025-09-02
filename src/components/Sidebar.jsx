import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      borderRight: '1px solid #ccc',
      padding: '20px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh'
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '10px 0' }}>Courses</li>
        <li style={{ margin: '10px 0' }}>Profile</li>
        <li style={{ margin: '10px 0' }}>Settings</li>
      </ul>
      <Link to="/"><button style={{ marginTop: '20px' }}>Logout</button></Link>
    </aside>
  );
}

export default Sidebar;
