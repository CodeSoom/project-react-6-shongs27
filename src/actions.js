import {
  fetchPageContents,
  fetchPageDetail,
  fetchRecentPosts,
} from './services/api';

export function getPageContents(category) {
  return async (dispatch) => {
    const pageContents = await fetchPageContents(category);
    // result를 그대로 return하고 끝내도 되지만,
    // useSelector로 데이터 변화 감지하려면 set하는 dispatch로 연결하는 것이 낫다
    dispatch(setPageContents(category, pageContents));
  };
}

export function setPageContents(pageName, pageContents) {
  return {
    type: 'setPageContents',
    payload: { pageName, pageContents },
  };
}

export function getPageDetail(params) {
  return async (dispatch, getState) => {
    const { category, id } = params;

    const pageDetail = await fetchPageDetail(category, id);

    dispatch(setPageDetail(pageDetail));
  };
}

export function setPageDetail(pageDetail) {
  return {
    type: 'setPageDetail',
    payload: { pageDetail },
  };
}

export function getFooterPosts() {
  return async (dispatch) => {
    try {
      // const [recentPosts, popularPosts] = await Promise.all([
      //   fetchRecentPosts(),
      //   fetchPopularPosts(),
      // ]);

      const recentPosts = await fetchRecentPosts();
      dispatch(setRecentPosts(recentPosts));
      // dispatch(setPopularPosts(popularPosts));
    } catch (error) {
      console.log('Footer 포스트 받아오기 실패');
      console.log(error);
    }
  };
}

export function setRecentPosts(recentPosts) {
  return {
    type: 'setRecentPosts',
    payload: { recentPosts },
  };
}
