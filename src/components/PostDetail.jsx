import MarkdownRender from './MarkdownRender';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';

const Likes = styled.div({
  '& span': {
    marginLeft: '5px',
  },
});

export default function PostDetail({ postDetail, likes, handleClick }) {
  const { _id, writer, title, description, category, content } = postDetail;

  return (
    <>
      <MarkdownRender markdown={content} />
      <Likes onClick={() => handleClick(_id)}>
        <FontAwesomeIcon icon={faHeart} size="lg" />
        <span>{likes}</span>
      </Likes>
    </>
  );
}
