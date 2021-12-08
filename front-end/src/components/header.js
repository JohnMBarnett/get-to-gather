import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div onClick={handleClick} className="title">
        <h1>GTG .</h1>
      </div>
      <nav>
        <a href="/login" className="hover_effect">
          Login
        </a>
        <span>|</span>
        <a href="/register" className="hover_effect">
          Register
        </a>
      </nav>
    </header>
  );
};

export default Header;
