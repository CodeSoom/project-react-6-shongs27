import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JsPage from './pages/JsPage';
import ReactPage from './pages/ReactPage';
// import ComputerPage from './pages/ComputerPage';
// import AlgorithmPage from './pages/AlgorithmPage';
// import SomethingPage from './pages/SomethingPage';
import PostDetailContainer from './components/PostDetailContainer';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';

import HeaderBar from './commons/top/HeaderBar';
import Title from './commons/top/Title';
import Nav from './commons/top/Nav';

import AsideContainer from './commons/aside/AsideContainer';

import { PageContainer, PostContainer } from '@styles/pageStyle';

function Test() {
  return <div>가자</div>;
}

export default function PagesContainer() {
  return (
    <>
      <HeaderBar />
      <Title />
      <Nav />
      <Routes>
        {/* route /일 경우 메인페이지 변경할 것 */}
        <Route
          path="/"
          element={
            <PageContainer>
              <HomePage />
            </PageContainer>
          }
        />

        <Route
          path="/home"
          element={
            <PageContainer>
              <HomePage />
            </PageContainer>
          }
        ></Route>

        <Route
          path="/js"
          element={
            <PageContainer>
              <JsPage />
            </PageContainer>
          }
        />
        <Route
          path="/react"
          element={
            <PageContainer>
              <ReactPage />
            </PageContainer>
          }
        />

        <Route
          path="/search"
          element={
            <PageContainer>
              <SearchPage />
            </PageContainer>
          }
        />
        <Route
          path="/login"
          element={
            <PageContainer>
              <LoginPage />
            </PageContainer>
          }
        />
        <Route
          path="/:category/:id"
          element={
            <PostContainer>
              <PostDetailContainer />
            </PostContainer>
          }
        />

        <Route
          path="*"
          element={
            <PageContainer>
              <div>Not Found Page</div>
            </PageContainer>
          }
        />
      </Routes>
      <AsideContainer />
    </>
  );
}
