import { useEffect } from 'react';

import PageDetail from '../components/PageDetail';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function ReactPage() {
  const dispatch = useDispatch();
  const ReactPageContents = useSelector((state) => state.pages.react);

  useEffect(() => {
    dispatch(getPageContents('react'));
  }, []);

  return <PageDetail articleTitle="React" pageContents={ReactPageContents} />;
}
