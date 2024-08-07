import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Projects = () => {
  return (
    <div className='projects-w'>
      <Header/>

      <section className="project">
        <div className="inner">
          <div className="tit-area">
            
          </div>
          <div className="cont-area">
            <div className="left">
              <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar]}
                  slidesPerView={1}
                  navigation
                  pagination={{
                    clickable: false,
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/main-entire-page.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/campaign-list.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/campaign-detail.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/campaign-write.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/campaign-edit.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/carbon.png'} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-w">
                    <img src={process.env.PUBLIC_URL + 'img/carbon-footprint.png'} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="right">

            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Projects;