import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeAnimation from './welcome.json';
import './App.css';

import Lottie from 'react-lottie';
import animationData from './lotties/kiss-of-the-heart';

const App = () => {
  const welcomeAreaRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const welcomeArea = welcomeAreaRef.current;
    const body = bodyRef.current;

    if (!welcomeArea || !body) {
      console.error('One or more refs are not set correctly');
      return;
    }

    const handleSkip = () => {
      gsap.to(welcomeArea, { duration: 0.3, opacity: 0 });
      body.classList.remove('stop_scroll');
    };

    const timeoutId = setTimeout(() => {
      handleSkip();
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  const tit1Ref = useRef(null);
  const tit2Ref = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const sliding = (el, speed, delay) => {
      const span = el.querySelector('span');
      const bgColor = window.getComputedStyle(span).color;

      const mask = document.createElement('div');
      mask.className = 'mask';
      mask.style.width = '100%';
      mask.style.height = '100%';
      mask.style.backgroundColor = bgColor;
      mask.style.position = 'absolute';
      mask.style.top = '0';
      mask.style.left = '-100%';

      el.appendChild(mask);

      setTimeout(() => {
        mask.style.transition = `left ${speed}ms ease-in-out`;
        mask.style.left = '0%';

        setTimeout(() => {
          span.style.opacity = 1;

          mask.style.left = '100%';

          setTimeout(() => {
            el.removeChild(mask);
          }, speed);
        }, speed);
      }, delay);
    };

    sliding(tit1Ref.current, 600, 0);
    sliding(tit2Ref.current, 600, 300);

    setTimeout(() => {
      const groupItems = groupRef.current.querySelectorAll('li');
      groupItems.forEach((item) => {
        item.classList.add('on');
      });
    }, 1200);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <div id="wrap" ref={bodyRef}>
      <div className="welcome-area" ref={welcomeAreaRef}>
        <div className="lottie">
          <Player
            autoplay
            loop
            src={welcomeAnimation}
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.5)', zIndex: 1 }}
          />
        </div>
      </div>

      <div>
        <Lottie 
        options={defaultOptions}
          height={400}
          width={400}
        />
      </div>

      <div className="intro">
      <div id="wrap">
        <h1 ref={tit1Ref}>
          <span>PORTFOLIO</span>
        </h1>
        <h2 ref={tit2Ref}>
          <span>KIM JI SOO</span>
        </h2>
      </div>
      <ul id="group" ref={groupRef}>
        <li><a href="profile.html" target="_blank"><span>About</span>Me</a></li>
        <li><a href="https://jisoooo17.github.io/portfolio_1/dist/" target="_blank">First</a></li>
        <li><a href="https://jisoooo17.github.io/portfolio_2/." target="_blank">Second</a></li>
        <li><a href="https://jisoooo17.github.io/portfolio_3/." target="_blank">Third</a></li>
        <li><a href="https://jisoooo17.github.io/portfolio_4/." target="_blank">Fourth</a></li>
      </ul>
    </div>

      <footer>
        <div className="inner">
          <p className="copyright">Copyright &copy; UI DEVELOP 1 TEAM. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
