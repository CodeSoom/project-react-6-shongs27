import { useEffect } from 'react';

import PageContent from '../components/PageContent';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function MainPage() {
  const dispatch = useDispatch();
  //useSelector는 언제 변하는가?
  const mainPageContents = useSelector((state) => state.pages.main);

  useEffect(() => {
    dispatch(getPageContents('main'));
  }, []);

  return <PageContent articleTitle="전체글" pageContents={mainPageContents} />;
}
