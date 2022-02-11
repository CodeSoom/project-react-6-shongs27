import { useEffect } from 'react';

import PageContent from '../components/PageContent';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function ReactPage() {
  const dispatch = useDispatch();
  const ReactPageContents = useSelector((state) => state.pages.react);

  useEffect(() => {
    dispatch(getPageContents('react'));
  }, []);

  return <PageContent articleTitle="React" pageContents={ReactPageContents} />;
}
