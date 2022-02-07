import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Article = styled.article({
  minHeight: '50vh',
  marginBottom: '3em',

  '& h3': {
    padding: '1em 0',
    borderBottom: '1px solid rgb(230, 230, 230)',
  },
});

const Item = styled.div({
  borderBottom: '1px solid rgb(230, 230, 230)',
  paddingTop: '30px',
  paddingBottom: '22px',
});

function MainPage() {
  const [PageDetail, setPageDetail] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((res) => setPageDetail(res));
  }, []);

  return (
    <Article id="content">
      <h3>전체 글</h3>
      <section className="inner">
        {PageDetail.map((value, index) => {
          let excerpt = value.content;
          if (excerpt.length > 200) {
            excerpt = excerpt.substring(0, 200) + '...';
          }

          return (
            <Item className="post_item">
              <span>{value.title}</span>
              <p className="post_content" style={{ color: '#666' }}>
                {excerpt}
              </p>
              <Link to={`/post/${value.category}/${value._id}`}>
                더보기 &gt;
              </Link>
            </Item>
          );
        })}
      </section>
    </Article>
  );
}

export default MainPage;
