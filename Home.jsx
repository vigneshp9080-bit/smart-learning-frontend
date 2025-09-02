import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1>Smart Learning</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <h2>Welcome to Smart Learning!</h2>
        <p>Learn smart, track your progress, achieve more.</p>
        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
