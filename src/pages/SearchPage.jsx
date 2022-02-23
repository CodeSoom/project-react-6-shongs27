import { useSelector } from 'react-redux';

export default function SearchPage() {
  const { searchTarget } = useSelector((state) => state.search);

  return <div>{searchTarget.map((post) => JSON.stringify(post))}</div>;
}
