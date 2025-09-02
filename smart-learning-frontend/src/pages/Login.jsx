import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    navigate('/dashboard'); // mock login redirect
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }}>
        <input type="email" placeholder="Email" required /><br/>
        <input type="password" placeholder="Password" required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
