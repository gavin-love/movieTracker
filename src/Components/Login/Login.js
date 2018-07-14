import React from "react";
import CreateUser from "../../container/CreateUser/CreateUser";
import LoginUser from "../../container/loginUser/LoginUser";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <CreateUser />
      <LoginUser />
    </div>
  );
};

export default Login;
