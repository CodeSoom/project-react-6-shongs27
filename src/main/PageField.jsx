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

export default function PageField({ articleTitle, pageDetail }) {
  return (
    <Article id="content">
      <h3>{articleTitle}</h3>
      <section className="inner">
        {pageDetail &&
          pageDetail.map((value) => {
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
                {/* <Link to={`/post/${value.category}/${value._id}`}>
                더보기 &gt;
              </Link> */}
              </Item>
            );
          })}
      </section>
    </Article>
  );
}
