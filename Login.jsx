import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder: Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <header>
        <h1>Smart Learning</h1>
      </header>
      <main>
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={{ maxWidth: '300px' }}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <Link to="/">Back to Home</Link>
      </main>
    </div>
  );
}

export default Login;
