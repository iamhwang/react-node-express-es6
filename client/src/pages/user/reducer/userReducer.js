/*
 -- 기능명 : 심사사례 API
 -- 작성자 : 이창규
 -- 작성일 : 2019.08.23
 -- 수정일 :
 -- 수정내용:d
*/
import { createSlice } from '@reduxjs/toolkit';
import checkAPIResponse from '../../_util/checkAPIResponse';
import { requestUserLoginAPI } from '../api/userApi';

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
    const { user: { username } } = getState();
    const data = await requestUserLoginAPI({ username });
    checkAPIResponse(data);
    console.log(data);
    console.log(data.status);
    if(data.status) {
      dispatch(setAccessToken({ accessToken: username })); 
    }
  };
}


export default reducer;
