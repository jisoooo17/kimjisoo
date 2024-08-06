import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

const AboutMe = () => {
  let navigate = useNavigate();

  // ApexChart state
  const [chartState, setChartState] = useState({
    series: [{
      data: [90, 90, 40, 70, 70, 60, 40, 40, 50, 70]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false // 툴바 비활성화
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1500, // 애니메이션 속도를 밀리초 단위로 설정
          animateGradually: {
            enabled: true,
            delay: 150 // 각 막대의 애니메이션 딜레이 설정
          },
          dynamicAnimation: {
            speed: 350 // 동적 애니메이션 속도 설정
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      colors: '#1e9aff',
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          // colors: ['#000'] // 데이터 레이블의 색상
        },
        formatter: (value) => `${value}%`, // 데이터 레이블에 % 추가
      },
      tooltip: {
        enabled: false, // 툴팁 비활성화
      },
      xaxis: {
        categories: ['HTML5', 'CSS3', 'Sass', 'Javascript', 'jQuery', 'React', 'Node.js', 'Python', 'MySql', 'Github'],
        labels: {
          show: false, // x축의 숫자 레이블 숨기기
        },
        axisBorder: {
          show: false, // x축의 경계선 숨기기
        },
        axisTicks: {
          show: false, // x축의 눈금 숨기기
        },
        title: {
          style: {
            fontSize: '16px',
            color: '#666' // x축 제목의 색상
          }
        }
      },
      yaxis: {
        max: 100, // y축의 최대값 설정
        labels: {
          style: {
            fontSize: '18px',
            colors: ['#333'] // y축 레이블의 색상
          }
        },
      }
    }
  });


  
  

  return (
    <div className="aboutme">
      <header id="header">
        <div className="inner">
          <button onClick={() => { navigate("/") }}>PORTFOLIO</button>
          <h2>ABOUT ME</h2>
        </div>
      </header>

      <section className="profile">
        <div className="inner">
          <div className="txt-area">
            <p className="txt">
              프론트엔드 개발에 열정을 가지고 있으며, <br />
              데이터를 기반으로 사용자 경험을 개선하는 것을 목표로 하고 있습니다.
            </p>
            <div className="txt-box">
              <p>기획자, 디자이너, 개발자와 협업을 통해 웹사이트 개발 프로세스를 이해하고 있으며, <br />커뮤니케이션과 협력 능력을 가지고 있습니다.</p>
              <p>사용자 중심의 개발을 지향합니다. 웹 접근성 인증마크를 획득해본 경험이 있으며, <br />브라우저 호환성 테스트를 통해 사용자 경험을 고려하여 서비스를 개발한 경험이 있습니다.</p>
            </div>
          </div>

          <div className="cont-wrap">
            <div className="left">
              <p className="pic"></p>
            </div>

            <div className="right">
              <h4>ABOUT ME</h4>
              <div className="txt-w">
                <p><span>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</span>김지수</p>
                <p><span>연락처</span><a href='tel:010-7586-9967'>010-7586-9967</a></p>
                <p><span>이메일</span>jisoooo17@gmail.com</p>
                <p><span>거주지</span>인천광역시 부평구</p>
                <p><span>학&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;력</span>이화여자대학교(한국음악과, 행정학과)</p>
                <p><span>Github</span><a href="https://github.com/jisoooo17">https://github.com/jisoooo17</a></p>
              </div>
            </div>
          </div>

          <div className="box-wrap">
            <div className="box">
              <h4>CAREER</h4>
              <div className="txt-w">
                <p><span className="peri">2021.05 - 2023.08</span> (주)이지미디어 UI개발팀</p>
                <p className="indent">현대드림투어 TRT 구축</p>
                <p className="indent">힐스테이트 웹사이트 리뉴얼</p>
                <p className="indent">코오롱그룹 웹사이트 리뉴얼</p>
                <p className="indent">코오롱인더스트리 웹사이트 개편</p>
                <p className="indent">미래에셋희망재단 웹사이트 리뉴얼</p>
                <p className="indent">HMG Driving Experience 웹사이트 고도화</p>
                <p className="indent">롯데면세점 홍보사이트 리뉴얼</p>
              </div>
            </div>

            <div className="box">
              <h4>CERTIFICATE</h4>
              <div className="txt-w">
                <p><span className="peri">2024.06</span>SQL개발자(최종합격)</p>
                <p><span className="peri">2023.07</span>정보처리기사(필기합격)</p>
                <p><span className="peri">2019.02</span>컴퓨터활용능력 1급(최종합격)</p>
                <p><span className="peri">2019.02</span>한국사능력검정시험 1급(최종합격)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="inner">
          <div className="txt-area">
            <h3 className="title">Skills</h3>
          </div>
          <div className="cont-area">
            <div>
              <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={600} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
