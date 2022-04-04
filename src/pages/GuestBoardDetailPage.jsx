import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function GuestBoardDetailPage() {
  const params = useParams();
  const guestBoard = useSelector((state) => state.guestBoard);

  const { id, title, content } = guestBoard[guestBoard.length - params.id];

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
              <button style={{ marginRight: '.4em' }} type="button">
                글 수정
              </button>
              <button style={{ marginRight: '.4em' }} type="button">
                글 삭제
              </button>
            </>
          )}
          <button style={{ marginRight: '2em' }} type="button">
            <Link to="/board">글 목록</Link>
          </button>
        </div>
      </>
    </>
  );
}
