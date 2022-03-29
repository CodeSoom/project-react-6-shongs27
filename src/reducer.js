const initialState = {
  GA: {
    todayActiveUser: '',
    yesterDayActiveUser: '',
    oneMonthActiveUser: '',
  },
  post: '',
  likePost: [],
  posts: {
    home: [],
    js: [],
    react: [],
    computer: [],
    recentPosts: [],
    popularPosts: [],
  },
  search: {
    searchField: '',
    searchedPosts: [],
  },
  login: {
    loginField: {
      email: '',
      password: '',
    },
    userId: '',
    accessToken: '',
  },
  page: { title: '', description: '' },
  clicked: false,
};

const reducer = {
  setPagesPosts(state, { payload: { category, pagePosts } }) {
    return {
      ...state,
      posts: {
        ...state.posts,
        [category]: pagePosts,
      },
    };
  },

  setPostDetail(state, { payload: { postDetail } }) {
    return {
      ...state,
      post: postDetail,
    };
  },

  setRecentPosts(state, { payload: { recentPosts } }) {
    return {
      ...state,
      posts: { ...state.posts, recentPosts },
    };
  },

  setPopularPosts(state, { payload: { popularPosts } }) {
    return {
      ...state,
      posts: { ...state.posts, popularPosts },
    };
  },

  changeSearchField(state, { payload: { searchField } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchField,
      },
    };
  },

  setSearchTarget(state, { payload: { searchedPosts } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchedPosts,
      },
    };
  },

  reverseClicked(state) {
    return {
      ...state,
      clicked: !state.clicked,
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      login: {
        ...state.login,
        loginField: {
          ...state.login.loginField,
          [name]: value,
        },
      },
    };
  },

  setAccessToken(state, { payload: { userId, accessToken } }) {
    return {
      ...state,
      login: {
        ...state.login,
        userId,
        accessToken,
      },
    };
  },

  logout(state) {
    return {
      ...state,
      login: {
        ...state.login,
        userId: '',
        accessToken: '',
      },
    };
  },

  changePostField(state, { payload: { name, value } }) {
    return {
      ...state,
      page: {
        ...state.page,
        [name]: value,
      },
    };
  },

  setGoogleAnalytics(state, { payload: { activeUsers } }) {
    return {
      ...state,
      GA: activeUsers,
    };
  },

  setLikePost(state, { payload: { likePost } }) {
    return {
      ...state,
      likePost,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function (state = initialState, action) {
  return (reducer[action.type] || defaultReducer)(state, action);
}
