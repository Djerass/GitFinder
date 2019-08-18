import {
  SEARCH,
  CLEAR_SEARCH,
  START_LOADING,
  END_LOADING,
  SET_USERINFO,
  SET_REPOS
} from "../actions/actions";

const initialState = {
  searchResult: [],
  userInfo: {},
  userRepos: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchResult: action.payload.searchResult
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchResult: []
      };
    case START_LOADING:
      return {
        ...state,
        loading: true
      };
    case END_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_USERINFO: {
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    }
    case SET_REPOS: {
      return {
        ...state,
        userRepos: action.payload.userRepos
      };
    }
    default:
      return state;
  }
};

export default reducer;
