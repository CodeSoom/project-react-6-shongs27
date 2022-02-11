import { useEffect } from 'react';

import PageDetail from '../components/PageDetail';

import { useSelector, useDispatch } from 'react-redux';
import { getPageContents } from '../actions';

export default function JsPage() {
  const dispatch = useDispatch();

  const jsPageContents = useSelector((state) => state.pages.js);

  useEffect(() => {
    dispatch(getPageContents('js'));
  }, []);

  return <PageDetail articleTitle="JS" pageContents={jsPageContents} />;
}
