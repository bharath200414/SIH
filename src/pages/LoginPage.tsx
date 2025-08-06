import React from 'react';
import './AuthPage.css';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="auth-card shadow p-4 rounded bg-white">
        <h2 className="text-center mb-4">Login to LearnMate</h2>
        <form>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>
          <button className="btn btn-primary w-100 mb-3">Login</button>
          <div className="text-center">
            <span>Don't have an account? </span>
            <Link to="/signup">Signup here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
