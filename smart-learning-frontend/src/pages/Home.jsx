import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Welcome to Smart Learning!</h2>
      <p>Learn smart, track your progress, achieve more.</p>
      <Link to="/login"><button>Get Started</button></Link>
    </div>
  );
}

export default Home;
