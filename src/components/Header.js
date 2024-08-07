import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <header className="header">
      <div className="inner">
        <button onClick={() => { navigate("/") }}>PORTFOLIO</button>
        <h2>ABOUT ME</h2>
      </div>
    </header>
  );
};

export default Header;