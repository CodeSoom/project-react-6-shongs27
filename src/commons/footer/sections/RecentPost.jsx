import styled from '@emotion/styled';
const Container = styled.div({
  display: 'flex',
});

const ul = styled.ul({
  minHeight: '50vh',
  marginBottom: '3em',

  // '& h3': {
  //   padding: '1em 0',
  //   borderBottom: '1px solid rgb(230, 230, 230)',
  // },
});

export default function RecentPost() {
  return (
    <Container>
      <h2>최근포스트</h2>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: '0px',
        }}
      >
        {/* {RecentList.map((value, index) => (
          <li key={index} style={{ borderBottom: '1px solid #e6e6e6' }}>
            <a
              style={{
                fontSize: '14px',
                fontWeight: '400',
                padding: '8px 0',
              }}
              href={`/post/${value.category}/${value._id}`}
            >
              {value.title}
            </a>
          </li>
        ))} */}
      </ul>
    </Container>
  );
}
