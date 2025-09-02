import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Login() {
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    navigate('/dashboard'); // mock login
  };

  return (
    <div>
      <Navbar />
      <main style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleLogin} style={{ maxWidth: '300px', width: '100%' }}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
