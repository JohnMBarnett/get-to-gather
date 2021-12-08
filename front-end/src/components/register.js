import React, { useState } from "react";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
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
    <div className="register_background login_register_background">
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
        <input
          name="email"
          type="email"
          placeholder="email:"
          value={credentials.email}
          onChange={handleChange}
        />
        <button className="form_button">Create Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
