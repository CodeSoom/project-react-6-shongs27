import { useEffect } from 'react';

import PageContent from '../components/PageContent';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function JsPage() {
  const dispatch = useDispatch();

  const jsPageContents = useSelector((state) => state.pages.js);

  useEffect(() => {
    dispatch(getPageContents('js'));
  }, []);

  return <PageContent articleTitle="JS" pageContents={jsPageContents} />;
}
