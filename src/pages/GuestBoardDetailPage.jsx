import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  changeThreadLoginField,
  getBoardThread,
  requestThreadLogin,
} from '../actions';

import { ThreadLogin } from '../components/ThreadLogin';

export default function GuestBoardDetailPage() {
  const [loginState, setLoginState] = useState(false);

  const dispatch = useDispatch();
  const password = useSelector((state) => state.guestBoard.loginField.password);
  const { id, title, content } = useSelector(
    (state) => state.guestBoard.thread
  );

  const params = useParams();
  const navigate = useNavigate();

  function handleChange(password) {
    dispatch(changeThreadLoginField(password));
  }

  function handleSubmit() {
    dispatch(requestThreadLogin(loginState, id));

    if (loginState === 'modify') {
      navigate(`/board/${id}/fix`);
    }

    if (loginState === 'eliminate') {
      navigate('/board');
    }
  }

  useEffect(() => {
    dispatch(getBoardThread(params.id));
  }, []);

  if (!id) {
    return (
      <>
        <div> 홈페이지 오류 </div>
        <div>해당 글 내용이 없습니다</div>
      </>
    );
  }

  return (
    <>
      <>
        <div>
          <span>{id}</span>
          <span>{title}</span>
          <span>{content}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'end' }}>
          {true && (
            <>
              <button
                style={{ marginRight: '.4em' }}
                type="button"
                name="modify"
                onClick={() => setLoginState('modify')}
              >
                글 수정
              </button>
              <button
                style={{ marginRight: '.4em' }}
                type="button"
                name="eliminate"
                onClick={() => setLoginState('eliminate')}
              >
                글 삭제
              </button>
            </>
          )}
          <button style={{ marginRight: '2em' }} type="button">
            <Link to="/board">글 목록</Link>
          </button>
        </div>
      </>
      {loginState && (
        <ThreadLogin
          setLoginState={setLoginState}
          handleChange={handleChange}
          value={password}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
