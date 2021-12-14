import React, { useState } from "react";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login_background login_register_background">
      <form onSubmit={handleSubmit} className="formContainer">
        <input
          name="username"
          type="text"
          placeholder="username:"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password:"
          value={credentials.password}
          onChange={handleChange}
        />
        <button className="form_button">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
