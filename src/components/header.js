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
        <button>GTG .</button>
      </div>
      <nav>
        <a href="/login" className="hover_effect">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
