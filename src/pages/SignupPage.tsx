import React from 'react';
import './AuthPage.css';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="auth-card shadow p-4 rounded bg-white">
        <h2 className="text-center mb-4">Create Your Account</h2>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Your full name" required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email address" required />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Choose a password" required />
          </div>
          <button className="btn btn-success w-100 mb-3">Signup</button>
          <div className="text-center">
            <span>Already have an account? </span>
            <Link to="/login">Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
