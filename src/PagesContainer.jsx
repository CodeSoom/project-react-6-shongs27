import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
// import ComputerPage from './pages/ComputerPage';
// import AlgorithmPage from './pages/AlgorithmPage';
// import SomethingPage from './pages/SomethingPage';
import PageDetailContainer from './components/PageDetailContainer';

import HeaderBar from './commons/top/HeaderBar';
import Title from './commons/top/Title';
import Nav from './commons/top/Nav';

import Footer from './commons/footer/FooterContainer';

import styled from '@emotion/styled';

const Container = styled.div({
  fontFamily: 'Noto Sans KR',
  margin: '0 auto',
  width: '50%',
});

export default function PagesContainer() {
  return (
    <>
      <HeaderBar />
      <Title />
      <Nav />
      <Container>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/js" element={<JsPage />} />
          <Route path="/react" element={<ReactPage />} />

          <Route path="/:category/:id" element={<PageDetailContainer />} />

          <Route path="*" element={<div>Not Found Page</div>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
