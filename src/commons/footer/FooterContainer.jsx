import styled from '@emotion/styled';

import RecentPosts from './sections/RecentPosts';
import PopularPosts from './sections/PopularPosts';
import FooterBar from './FooterBar';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getFooterPosts } from '../../actions';

const Container = styled.div({
  borderTop: '1px solid black',
  display: 'flex',
  justifyContent: 'space-around',

  // height: 'calc(100% - 80px)',
});

export default function FooterContainer() {
  const dispatch = useDispatch();
  const recentPosts = useSelector((state) => state.posts.recentPosts);
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  useEffect(() => {
    dispatch(getFooterPosts());
  }, []);

  return (
    <>
      <Container>
        <RecentPosts recentPosts={recentPosts} />
        <PopularPosts popularPosts={popularPosts} />
      </Container>
      <FooterBar popularPosts={popularPosts} />
    </>
  );
}
