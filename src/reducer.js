const initialState = {
  page: { title: '', description: '' },
  posts: {
    home: [],
    js: [],
    react: [],
    recentPosts: [],
    popularPosts: [],
  },
  search: {
    searchField: '',
    searchTarget: [],
  },
  login: {
    loginField: {
      email: '',
      password: '',
    },
    userId: '',
    accessToken: '',
  },
  clicked: false,
};

const reducer = {
  setPagesPosts(state, { payload: { category, pagePosts } }) {
    return {
      ...state,
      posts: {
        ...state.pages,
        [category]: pagePosts,
      },
    };
  },

  setPageDetail(state, { payload: { pageDetail } }) {
    return {
      ...state,
      page: pageDetail,
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

  setSearchTarget(state, { payload: { searchTarget } }) {
    return {
      ...state,
      search: {
        ...state.search,
        searchTarget,
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
};

function defaultReducer(state) {
  return state;
}

export default function (state = initialState, action) {
  return (reducer[action.type] || defaultReducer)(state, action);
}
