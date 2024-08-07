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
          <div className="title-box">
            <h3 className='title'>PROJECTS</h3>
          </div>

          <div className="box-w">
            <div className="txt-area">
              <p className="tit">BBANG끗</p>
              <p className="sub-tit">3인 팀프로젝트</p>
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
                <div className="txt-w">
                  <p className="txt">BBANG끗은 개인, 기업, 단체 등 유형별 사용자들이 사용할 수 있는 환경 보호 캠페인 플랫폼입니다.</p>
                  <p className="txt">인터랙티브한 환경 보호 플랫폼의 부재를 해소하고자 제작하였으며 사용자들이 손쉽게 캠페인을 생성하고 다양한 사람들과 공유할 수 있도록 하고자 했습니다.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Projects;