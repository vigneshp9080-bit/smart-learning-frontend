import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Welcome to Smart Learning!</h2>
        <p>Learn smart, track your progress, and achieve more.</p>
        <Link to="/login"><button style={{ marginTop: '20px' }}>Get Started</button></Link>
      </main>
    </div>
  );
}

export default Home;
