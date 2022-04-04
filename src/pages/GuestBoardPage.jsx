import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeThreadField,
  getGuestBoard,
  registerThreadField,
} from '../actions';

import ThreadList from '../components/ThreadList';
import ThreadForm from '../components/ThreadForm';

export default function GuestBoardPage() {
  const [FormMode, setWritingMode] = useState(false);

  const dispatch = useDispatch();
  const guestBoard = useSelector((state) => state.guestBoard);
  const threadField = useSelector((state) => state.threadField);

  useEffect(() => {
    dispatch(getGuestBoard());
  }, []);

  function handleMode() {
    setWritingMode((prev) => !prev);
  }

  function handleSubmit() {
    dispatch(registerThreadField());
  }

  function handleChange(name, value) {
    dispatch(changeThreadField(name, value));
  }

  return (
    <>
      <h2
        style={{
          padding: '1em 0',
          borderBottom: '1px solid rgb(230, 230, 230)',
        }}
      >
        방명록
      </h2>
      {FormMode ? (
        <ThreadForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleMode={handleMode}
          threadField={threadField}
        />
      ) : (
        <ThreadList guestBoard={guestBoard} handleMode={handleMode} />
      )}
    </>
  );
}
