import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  // 헤더 스크롤 모션
  let thisScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const isScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const header = document.querySelector("header");

      if (isScrollTop > thisScroll) { // down
        if (isScrollTop > 0) {
          header.classList.add("wht");
          if (header && isScrollTop > 100) {
            if (!header.classList.contains("hover")) {
              header.classList.add("hide");
            }
          }
        }
      }
      if (isScrollTop < thisScroll) { // up
        if (header) {
          header.classList.remove("hide");
        }
        if (header && isScrollTop <= 100) {
          header.classList.remove("wht");
        }
      }

      thisScroll = isScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h1>
        <button onClick={() => { navigate("/") }}>Kim Jisoo</button>
      </h1>
      <div className="utils">
        <button onClick={() => { navigate("/aboutme") }}>ABOUT ME</button>
        <button onClick={() => { navigate("/projects") }}>PROJECTS</button>
      </div>
    </header>
  );
};

export default Header;