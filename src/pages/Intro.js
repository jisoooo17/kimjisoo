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
      const welcomeArea = document.querySelector('.welcome_area');
      const titArea = document.querySelector('.tit_area');
      const imgWrap = document.querySelector('.img_wrap');
  
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
    <div className='intro'>
      <div className="welcome_area">
        <Lottie animationData={welcome} autoplay style={{ height: '400px', width: '400px',position:"absolute", top:"50%", left:"50%", zIndex:1, transform:"translate(-50%, -50%)"}}  lottieRef={lottieRef} />
      </div>

      <div className="module_content">
      <div className="tit_area">
        <p className="tit"><span>신입 프론트엔드 개발자 김지수입니다.</span></p>
        <div className="made">
          <button type="button" onClick={()=>{navigate("/aboutme")}}><span>About me</span></button>
          <button type="button"><span>Project</span></button>
        </div>      
      </div>
        <div className="img_area">
          <div className="img_wrap scroll_motion">
            <img src={process.env.PUBLIC_URL + 'img-project.jpg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;