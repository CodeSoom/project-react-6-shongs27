import styled from '@emotion/styled';

export const PostContainer = styled.div({
  margin: '2em auto',
  minHeight: '70vh',

  width: '95%',

  //태블릿과 컴퓨터 화면
  '@media only screen and (min-width: 768px)': {
    width: '933px',
  },
});

export const PageContainer = styled.div({
  margin: '2em auto',

  minHeight: '50vh',
  width: '90%',

  '@media only screen and (min-width: 768px)': {
    paddingLeft: '100px',

    minHeight: '70vh',
    width: '50%',
  },
});

export const List = styled.ul({
  padding: '0',
  margin: '0',
});

export const Item = styled.li({
  position: 'relative',

  listStyle: 'none',
  borderBottom: '1px solid #e6e6e6',

  padding: '8px 0',

  '& a': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
    fontSize: '0.875em',
    lineHeight: '1.5714',
    whiteSpace: 'nowrap',
    color: '#95a5a6',
  },
});
