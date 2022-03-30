import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGuestBoard } from '../actions';

import Thread from '../components/Thread';
import ThreadWriting from '../components/ThreadWriting';

export default function GuestBoard() {
  const [writingState, setWritingState] = useState(false);

  const dispatch = useDispatch();
  const guestBoard = useSelector((state) => state.guestBoard);

  useEffect(() => {
    dispatch(getGuestBoard());
  }, []);

  function handleClick() {
    setWritingState((prev) => !prev);
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
      {writingState ? (
        <ThreadWriting />
      ) : (
        <Thread guestBoard={guestBoard} handleClick={handleClick} />
      )}
    </>
  );
}
