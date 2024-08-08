import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import welcome from '../welcome.json';
import "../App.css";

const Intro = () => {
  const lottieRef = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5); 
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const welcomeArea = document.querySelector('.welcome-area');
      const titArea = document.querySelector('.tit-w');
      const imgWrap = document.querySelector('.img');
  
      if (welcomeArea) {
        welcomeArea.style.transition = 'opacity 0.3s ease-out';
        welcomeArea.style.opacity = 0; 
  
        // 애니메이션이 끝난 후 실행
        setTimeout(() => {
          welcomeArea.style.display = 'none';
          if (titArea) titArea.classList.add('active');
          if (imgWrap) imgWrap.classList.add('active');
        }, 300);
      }
    }, 6000); 
  }, []);
  
  return (
    <div className='intro-w'>
      <div className="welcome-area">
        <Lottie className='lottie-ani' animationData={welcome} autoplay style={{ height: '700px', width: '700px',position:"absolute", top:"50%", left:"50%", zIndex:1, transform:"translate(-50%, -50%)"}}  lottieRef={lottieRef} />
      </div>

      <div className="content-area">
        <div className="tit-w">
          <p className="tit"><span>주니어 프론트엔드 개발자 <br className='only-mob'/>김지수입니다.</span></p>
          <div className="made">
            <button type="button" onClick={()=>{navigate("/aboutme")}}><span>ABOUT ME</span></button>
            <button type="button" onClick={()=>{navigate("/projects")}}><span>PROJECTS</span></button>
          </div>      
        </div>
        <div className="img-w">
          <div className="img scroll_motion">
            <img src={process.env.PUBLIC_URL + 'img-project.jpg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;