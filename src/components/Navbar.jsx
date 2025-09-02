import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isDashboard }) {
  return (
    <header style={{
      backgroundColor: '#4f46e5',
      color: 'white',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>Smart Learning</h1>
      {!isDashboard && (
        <nav>
          <Link to="/" style={{ margin: '0 10px', color: 'white', fontWeight: 'bold' }}>Home</Link>
          <Link to="/login" style={{ margin: '0 10px', color: 'white', fontWeight: 'bold' }}>Login</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
