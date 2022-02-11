import { useParams } from 'react-router-dom';

export default function PageDetail() {
  const params = useParams();
  console.log('왔냐 그페이지에', params);
  return <div>페이지 세부사항</div>;
}
