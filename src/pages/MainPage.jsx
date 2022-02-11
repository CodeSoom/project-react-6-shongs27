import { useEffect } from 'react';

import PageDetail from '../components/PageDetail';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function MainPage() {
  const dispatch = useDispatch();
  //useSelector는 언제 변하는가?
  const mainPageContents = useSelector((state) => state.pages.main);

  useEffect(() => {
    dispatch(getPageContents('main'));
  }, []);

  return <PageDetail articleTitle="전체글" pageContents={mainPageContents} />;
}
