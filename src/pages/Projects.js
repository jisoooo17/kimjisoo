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

   // Accordion 상태 관리
   const [activeIndex, setActiveIndex] = useState(null);

   // Accordion 클릭 핸들러
   const handleAccordionClick = (index) => {
     setActiveIndex(prevIndex => (prevIndex === index ? null : index));
   };
  

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
                  <p className="txt">BBANG끗은 개인, 기업, 단체 등 다양한 유형의 사용자가 참여할 수 있는 환경 보호 캠페인 플랫폼입니다. </p>
                  <p className="txt"> 인터랙티브한 환경 보호 플랫폼의 부재를 해소하고, 사용자들이 손쉽게 캠페인을 생성하고 공유할 수 있도록 제작되었습니다.</p>
                  <p className="txt">프론트엔드와 백엔드 작업에 모두 참여했습니다. 프론트엔드 개발에서는 React를 기반으로 작업했으며, 컴포넌트 기반 아키텍처를 통해 사용자 인터페이스를 설계하고 구현했습니다. 백엔드 개발에서는 Node.js를 사용하여 RESTful API와 서버 측 로직의 일부 기능을 개발하였습니다. 또한, MySQL을 활용하여 데이터베이스 설계와 서버의 원격 데이터 처리를 수행하여 데이터를 전송 및 관리했습니다.</p>

                </div>

                <div className="detail-w">
                  <div className="flex-txt">
                    <span className="label">주요 기능</span>
                    <p className="desc">게시글 CRUD, 댓글 등록 및 삭제, 게시글 검색, 회원유형별 게시글 탭, 탄소발자국 계산 및 결과 데이터 시각화, 계산 결과 이미지 저장, 로그인, 회원가입</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">My work</span>
                    <p className="desc">게시글 CRUD, 댓글 등록 및 삭제, 게시글 검색, 회원유형별 게시글 탭</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">Frontend</span>
                    <p className="desc">React, Redux, Javascript</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">Backend</span>
                    <p className="desc">Node.js</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">Library</span>
                    <p className="desc">React-quill, React-date-picker, Swiper, Html2canvas, Recharts</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">Database</span>
                    <p className="desc">MySql</p>
                  </div>
                  <div className="flex-txt">
                    <span className="label">Github</span>
                    <p className="desc"><a href="https://github.com/jisoooo17/bbangkkeut_campaign">github.com/jisoooo17/bbangkkeut_campaign</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-w">
              <ul className="accordion">
                <li className={activeIndex === 0 ? 'on' : ''}>
                  <button className="question" onClick={() => handleAccordionClick(0)}>
                    <p className="tit"> ▶ 시연 영상</p>
                    <span></span>
                  </button>
                  <div className="answer">
                    <p className="txt"></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Projects;