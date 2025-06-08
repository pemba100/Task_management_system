import React from "react";
import LoginForm from "../../../Components/LoginForm";
import taskkkkkk from "../../../assets/taskkkkkk.jpg";

const Login = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
      <div
        className="bg-white shadow rounded p-4 max-w-75 mx-auto overflow-hidden"
        style={{ maxWidth: '900px' }}
      >
        <h2 className="h4 text-center text-dark fw-semibold mb-4">WELCOME BACK !</h2>

        <div className="d-flex flex-column flex-md-row">
          {/* Left image */}
          <div
            className="d-none d-md-flex align-items-center justify-content-center bg-gradient p-4 flex-fill"
            style={{ background: 'linear-gradient(135deg, #d9f99d, #ffffff)' }}
          >
            <img src={taskkkkkk} alt="Login visual" className="img-fluid" style={{ maxWidth: '300px' }} />
          </div>

          {/* Right login form */}
          <div className="flex-fill p-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
