import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { handleScroll } from "../components/ScrollMotion.js";

const Projects = () => {
  let navigate = useNavigate();

  // 페이지 로드 후 바로 실행되는 모션
  useEffect(()=>{
    document.querySelector(".project .title-box .title").style.opacity =  1;
    document.querySelector(".project .title-box .title").style.transform = "translateY(0)";
    document.querySelector(".project .box-w:nth-child(1)").style.opacity = 1;
    document.querySelector(".project .box-w:nth-child(1)").style.transform = "translateY(0)";
  });
  
  // accordion 
  let [activeIndex, setActiveIndex] = useState(null);
  let handleAccordionClick = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // 스크롤 모션
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // 페이지 진입 시 스크롤탑 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className='projects-w'>
      <Header/>

      <section className="project">
        <div className="inner">
          <div className="title-box">
            <h3 className='title'>PROJECTS</h3>
          </div>

          <div className="cont-wrap">
            <div className="box-w scroll-motion">
              <div className="txt-area">
                <p className="tit">BBANG끗</p>
                <p className="sub-tit">3인 팀프로젝트(2024-02-16 ~ 2024-03-15)</p>
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
                      <p className="tit"> ▶ &nbsp;시연 영상</p>
                      <span></span>
                    </button>
                    <div className="answer">
                      <div className="video-w">
                        <p className="video-txt">
                          게시판 CRUD
                        </p>
                        <iframe 
                          width="100%" 
                          height="auto" 
                          src="https://www.youtube.com/embed/VvIPCfftxLM" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        ></iframe>
                      </div>
                      <div className="video-w">
                        <p className="video-txt">
                        탄소발자국 계산기
                        </p>
                        <iframe 
                          width="100%" 
                          height="auto" 
                          src="https://www.youtube.com/embed/bnRxcdAx958" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        ></iframe>
                      </div>
                      <div className="video-w">
                        <p className="video-txt">
                          회원가입 및 로그인 
                        </p>
                        <iframe 
                          width="100%" 
                          height="auto" 
                          src="https://www.youtube.com/embed/piaYBZiUBHQ" 
                          title="YouTube video player" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        ></iframe>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box-w shop scroll-motion">
              <div className="txt-area">
                <p className="tit">Shoe Shop</p>
                <p className="sub-tit">1인 프로젝트(2024-07-16 ~ 2024-07-24)</p>
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
                    >
                    <SwiperSlide>
                      <div className="img-w">
                        <img src={process.env.PUBLIC_URL + 'img/shop-main.png'} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img-w">
                        <img src={process.env.PUBLIC_URL + 'img/shop-detail.png'} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="img-w">
                        <img src={process.env.PUBLIC_URL + 'img/shop-cart.png'} alt="" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="right">
                  <div className="txt-w">
                    <p className="txt">코딩애플의 리액트 강의를 클론코딩한 결과물입니다.</p>
                    <p className="txt"> 이 프로젝트를 통해 컴포넌트, props, state를 학습하여 리액트의 기초 문법을 정확히 숙지했습니다. Redux와 Context API를 통해 state를 효과적으로 관리하며, 서버와의 통신은 Ajax를 활용했습니다. 또한, Styled Components, Bootstrap과 같은 외부 라이브러리와 JavaScript ES6 문법들을 활용하여 개발을 진행했습니다.</p>
                  </div>
                  <div className="detail-w">
                    <div className="flex-txt">
                      <span className="label">주요 기능</span>
                      <p className="desc">Localstorage를 활용한 장바구니, 탭 UI</p>
                    </div>
                    <div className="flex-txt">
                      <span className="label">Frontend</span>
                      <p className="desc">React, Redux, Javascript, Bootstrap</p>
                    </div>
                    <div className="flex-txt">
                      <span className="label">Github</span>
                      <p className="desc"><a href="https://github.com/jisoooo17/shop_clone">github.com/jisoooo17/shop_clone</a></p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <div className="btn-area">
        <button className='btn-goto scroll-motion' onClick={()=>{navigate("/aboutme")}}>
          <span>프로필 보러가기</span>
        </button>
      </div>

      <Footer/>
    </div>
  );
};

export default Projects;