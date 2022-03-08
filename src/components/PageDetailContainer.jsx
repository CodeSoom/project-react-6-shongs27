import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import { getPostDetail } from '../actions';

import PageDetail from './PageDetail';

export default function PageDetailContainer() {
  const dispatch = useDispatch();
  const params = useParams();
  const pageDetail = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetail(params));
  }, [params]);

  return <PageDetail pageDetail={pageDetail} />;
}
