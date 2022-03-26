import PostDetail from './PostDetail';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostDetail, upLike } from '@actions';

export default function PostDetailContainer() {
  const dispatch = useDispatch();
  const params = useParams();
  const postDetail = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetail(params));
  }, [params]);

  function handleClick() {
    dispatch(upLike());
  }

  return <PostDetail postDetail={postDetail} onClick={handleClick} />;
}
