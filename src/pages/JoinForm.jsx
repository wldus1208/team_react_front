import React from 'react';
import './joinForm.css';

function JoinForm() {
  return (
    <div className="d-flex align-items-center py-4">
        <div className="form-signin w-100 m-auto">
        <h1 className="h3 mb-3 fw-normal">sign up</h1>

        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name"/>
            <label htmlFor="floatingInput">Name</label>
        </div><br />
        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="ID"/>
            <label htmlFor="floatingInput">ID</label>
        </div><br />
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
            <label htmlFor="floatingInput">Email</label>
        </div><br />
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button className="btn btn-primary w-100 py-2" type="button">Sign up</button>
        </div>
    </div>
  );
}

export default JoinForm;
