import { useParams } from 'react-router-dom';

export default function PageDetailContainer() {
  //1. useParams의 파라미터로 데이터 다시 fetch
  //2. Link를 통해 데이터 전달
  const params = useParams();

  return <div>페이지 세부사항</div>;
}
