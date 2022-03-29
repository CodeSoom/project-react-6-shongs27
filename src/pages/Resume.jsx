import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { LinkPage } from '../styles/pageStyle';

const Head = styled.h1({
  margin: '2em 1em',
});

const Category = styled.div({
  minHeight: '24em',

  borderBottom: '1px solid #e6e6e6',
  marginBottom: '2em',

  '& h2': {
    padding: '.5em',
    backgroundColor: '#3498db',
  },
});

const Content = styled.div({
  display: 'flex',
  padding: '0.6em',
  margin: '0',
});

const ContentIntroduce = styled.div({
  margin: '.8em 2em',
});

const Container = styled.div({
  marginTop: '10px',
  padding: '20px',
  border: '2px solid rgb(33, 150, 243)',
  borderRadius: '20px',
});

const bounce = keyframes`
  from, to {
    transform: translate3d(0,0,0);
  }

 
  50% {
    transform: translate3d(0, 5px, 0);
  }
  
  `;

const Addon = styled.div({
  display: 'flex',
  justifyContent: 'end',

  '& button': {
    border: 'none',
    backgroundColor: 'white',

    textAlign: 'end',

    animation: `${bounce} .8s ease infinite alternate`,
  },
});

export default function Resume() {
  return (
    <>
      <Head>😁발전하는 개발자 홍원배입니다</Head>
      <Category className="aboutme">
        <h2>🙋‍♂️ About me</h2>
        <Content>
          <div>
            <img
              src="img/hongs.jpg"
              alt="홍원배"
              width="180px"
              height="180px"
            />
          </div>
          <ContentIntroduce>
            <h3>Intorduction</h3>
            <ul>
              <li>안녕하세요! 신입 프론트엔드 개발자 홍원배입니다</li>
              <li>풀스택 개발자를 꿈꾸며, 매일 공부하고 있습니다</li>
              <li>
                무엇보다도 꾸준함의 가치를 믿고 학습하며 기술 노션페이지를
                기록하고 있습니다
              </li>
              <li>Clean Code에 대한 고민을 생활화 합니다</li>
              <li>함께 하는 성장에 관심이 많습니다</li>
            </ul>

            <h3>Contact</h3>
            <ul>
              <li>Email | shongs27@gmail.com</li>
              <li>
                <LinkPage href="https://github.com/shongs27" target="_blank">
                  Github
                </LinkPage>
                <span> | https://github.com/shongs27</span>
              </li>
              <li>
                <LinkPage href="https://shongs27.kr" target="_blank">
                  Blog
                </LinkPage>
                <span> | 홍원배의 기술블로그</span>
              </li>
            </ul>
          </ContentIntroduce>
        </Content>
      </Category>
      <Category className="skills">
        <h2>💻 Skills</h2>
        <div style={{ paddingTop: '10px', paddingLeft: '20px' }}>
          <h3>Fronted</h3>
          <ul>
            <li>Html, CSS, Javascript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        &nbsp;
        <div style={{ paddingBottom: '10px', paddingLeft: '20px' }}>
          <h3>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Amazon Clould</li>
          </ul>
        </div>
      </Category>
      <Category className="projects">
        <h2>👨🏼‍💻 Projects</h2>
      </Category>
      <Category className="education">
        <h2>👨‍🏫 Education</h2>

        <Container>
          <h3>코드숨 리액트 6기</h3>
          <p>2021.12</p>
          <p>코드숨 교육기관 리액트 TDD 개발방법론</p>
          <ul>
            <li>3개월 과정</li>
            <li>리팩토링을 통한 리액트 실습</li>
            <li>테스트 개발방법론 학습</li>
            <li>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#bdc3c7',
                  fontStyle: 'italic',
                }}
                href="https://www.codesoom.com/"
              >
                코드숨 홈페이지 링크
              </a>
            </li>
          </ul>
        </Container>

        <Container>
          <h3>빅데이터 청년인재</h3>
          <p>2019.06</p>
          <p>과학통신부 주관 빅데이터 청년인재</p>
          <ul>
            <li>3개월 교육과정</li>
            <li>1개월 집체교육 + 2개월 프로젝트</li>
            <b>미세먼지 농도에 따른 기상 예측 프로젝트 2등</b>
          </ul>
        </Container>

        <Container>
          <h3>인텔과 함께하는 AI</h3>
          <p>2020.01</p>
          <p>
            인텔에서 주관하는 인공지능 관련 교육과 드론을 이용한 자동주행 실습
          </p>
          <ul>
            <li>1개월 교육</li>
          </ul>
        </Container>
      </Category>
      {/* //💬 */}

      <Category className="mottos">
        <h2>📌 Mottos</h2>
        <ul>
          <li>책만 읽기에는 시간이 너무 없다</li>
          <li>'척' 하지말자</li>
        </ul>
      </Category>

      <Addon className="Addon">
        {/* 오른쪽에 위치, 살짝 통통 튀는 애니메이션 */}
        <button type="button" title="위로 이동, 연락 기능">
          <FontAwesomeIcon icon={faCircleQuestion} size="4x" />
        </button>
      </Addon>
    </>
  );
}
