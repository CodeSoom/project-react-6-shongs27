import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { List, Item } from '../../../styles/pageStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div({
  float: 'left',
  width: '33.3%',
  minHeight: '10px',
  margin: '0 0 40px',
  padding: '0 12px',
  boxSizing: 'border-box',
});

const Span = styled.span({
  position: 'absolute',
  right: '2px',
});

export default function PopularPosts({ popularPosts = [] }) {
  return (
    <Container>
      <h3>인기포스트</h3>
      <List>
        {popularPosts.map(({ id, title, category, likes }, index) => (
          <Item key={index}>
            <Link to={`/${category}/${id}`}>
              {`<${category[0].toUpperCase() + category.slice(1)}> ${title} `}

              <Span>
                <FontAwesomeIcon icon={faThumbsUp} />
                &nbsp; {`${likes}`}
              </Span>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
