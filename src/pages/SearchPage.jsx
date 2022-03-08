import { useSelector } from 'react-redux';

import PagesPosts from '../components/PagesPosts';

export default function SearchPage() {
  const { searchTarget } = useSelector((state) => state.search);

  return <PagesPosts articleTitle="검색 결과" pagesPosts={searchTarget} />;
}
