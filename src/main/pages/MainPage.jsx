import { Container } from '../../../styles/pageStyle';

// import { message, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function MainPage() {
  const [mainPageDetail, setMainPageDetail] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/blogs')
      .then((res) => res.json())
      .then((res) => setMainPageDetail(res));
  }, []);

  return (
    <article id="content">
      <div className="post-header">
        <h2>전체 글</h2>
      </div>
      <div className="inner">
        {mainPageDetail.map((value, index) => {
          let excerpt = value.body;
          if (excerpt.length > 200) {
            excerpt = excerpt.substring(0, 200) + '...';
          }
          return (
            <div className="post-item">
              <span
                style={{
                  padding: '10px 0 0',
                  fontSize: '18px',
                  fontWeight: '700',
                }}
                className="title"
              >
                {value.title}
              </span>
              <p style={{ color: '#666' }} className="excerpt">
                <span>{excerpt}</span>
              </p>
              <Link
                className="more"
                to={`/post/${value.category}/${value._id}`}
              >
                더보기&gt;
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default MainPage;
