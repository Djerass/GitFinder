export const SEARCH = "SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";
export const GET_USERINFO = "GET_USERINFO";
export const SET_USERINFO = "SET_USERINFO";
export const GET_REPOS = "GET_REPOS";
export const SET_REPOS = "SET_REPOS";

export const search = searchResult => {
  return {
    type: SEARCH,
    payload: {
      searchResult
    }
  };
};

export const clear_search = () => {
  return {
    type: CLEAR_SEARCH
  };
};

export const start_loading = () => {
  return {
    type: START_LOADING
  };
};

export const end_loading = () => {
  return {
    type: END_LOADING
  };
};

// ***********
// Search action
// ***********
export const start_search = value => {
  return (dispatch, getState) => {
    dispatch(start_loading());
    fetch(`https://api.github.com/search/users?q=${value}`)
      .then(res => res.json())
      .then(json => {
        const searchResult = json.items;
        dispatch(search(searchResult));
        dispatch(end_loading());
        console.log(getState());
      })
      .catch(err => console.log(err));
  };
};

const set_userinfo = userInfo => {
  return {
    type: SET_USERINFO,
    payload: {
      userInfo
    }
  };
};

const set_userrepos = userRepos => {
  return {
    type: SET_REPOS,
    payload: {
      userRepos
    }
  };
};

// ***********
// Get user action
// ***********
export const get_userinfo = login => {
  return dispatch => {
    dispatch(start_loading());
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(json => {
        const userInfo = json;
        dispatch(set_userinfo(userInfo));
        dispatch(end_loading());
      })
      .catch(err => console.log(err));
  };
};

// ***********
// Get repos action
// ***********
export const get_repos = url => {
  return dispatch => {
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(json => {
          const userRepos = json;
          dispatch(set_userrepos(userRepos));
        })
        .catch(err => console.log(err));
    }
  };
};
