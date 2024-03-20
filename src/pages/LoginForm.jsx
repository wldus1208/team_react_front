import React from 'react';
import './loginForm.css';

function LoginForm() {
  return (
    <div className="d-flex align-items-center py-4">
        <div className="form-signin w-100 m-auto">
        <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
        </div>
    </div>
  );
}

export default LoginForm;
