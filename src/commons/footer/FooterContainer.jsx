import styled from '@emotion/styled';

import RecentPost from './sections/RecentPost';
import FooterBar from './FooterBar';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div({
  borderTop: '1px solid black',

  height: 'calc(100% - 80px)',
});

export default function FooterContainer() {
  const dispatch = useDispatch();
  const { recentPosts } = useSelector((state) => state.posts.recentPosts);

  useEffect(() => {
    dispatch(getRecentPosts());
  }, []);

  return (
    <Container>
      <RecentPost />
      <FooterBar />
    </Container>
  );
}
