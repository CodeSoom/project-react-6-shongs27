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
  guestBoard: [
    {
      id: '1',
      title: '이런 못된 놈',
      writer: 'ㅇㅇ',
      content: '저기요 이보세요',
      createdAt: '2020/1/1',
    },
    {
      id: '2',
      title: '채용하고 싶어요',
      writer: '배민 리크루터',
      content: '저기요 이보세요',
      createdAt: '2020/1/3',
    },
    {
      id: '3',
      title: '굿',
      writer: '멉니까',
      content: '저기요 이보세요',
      createdAt: '2020/2/3',
    },
  ],
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

  setGuestBoard(state, { payload: { guestBoard } }) {
    return {
      ...state,
      guestBoard,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function (state = initialState, action) {
  return (reducer[action.type] || defaultReducer)(state, action);
}
