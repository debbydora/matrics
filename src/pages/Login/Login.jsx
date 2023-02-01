import React from "react";
import "./Login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import LoginProvider from "./LoginProvider";
const Login = () => {
  return (
    <LoginProvider
      render={({ user, onHandleChange, onSubmitUser }) => {
        return (
          <div className="login__page">
            <LoginCard>
              <h1 className="title">Sign In</h1>
              <p className="subtitle">
                Please log in using your username and password!
              </p>
              <form>
                <div className="inputs_container">
                  <input
                    type="email"
                    placeholder="Username"
                    name="userName"
                    value={user.userName}
                    onChange={onHandleChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={onHandleChange}
                  />
                </div>
                <button
                  type="button"
                  className="login_button"
                  onClick={onSubmitUser}
                >
                  Login
                </button>
              </form>
              <ToastContainer />
            </LoginCard>
          </div>
        );
      }}
    />
  );
};

export default Login;
