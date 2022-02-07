import { useEffect, useState } from 'react';

import { fetchMainPage } from '../../services/api';

import PageField from '../PageField';

function MainPage() {
  const [mainPageDetail, setMainPageDetail] = useState([]);

  useEffect(() => {
    fetchMainPage().then(setMainPageDetail).catch(console.log);
  }, []);

  return <PageField articleTitle="전체글" pageDetail={mainPageDetail} />;
}

export default MainPage;
