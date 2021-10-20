import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username : '',
  accessToken: '',
};

const reducers = {
  changeUsername(state, { payload: { name, value } }) {
    return {
      ...state,
      [name]: value,
    };
  },
  setAccessToken(state, { payload: { accessToken } }) {
    return {
      ...state,
      accessToken,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'member',
  initialState,
  reducers,
});

export const { 
  changeUsername, 
  setAccessToken,
} = actions;

export function requestUserLogin() {
  return async (dispatch, getState) => {
    const { user: username } = getState();
    dispatch(setAccessToken({ accessToken: username }));
  };
}


export default reducer;
