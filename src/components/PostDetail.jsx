import MarkdownRender from './MarkdownRender';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';

const Likes = styled.div({
  '& span': {
    marginLeft: '5px',
  },
});

export default function PostDetail({ postDetail }) {
  const { _id, writer, title, description, category, content, likes } =
    postDetail;

  return (
    <>
      <MarkdownRender markdown={content} />
      <Likes>
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <span>{likes}</span>
      </Likes>
    </>
  );
}
