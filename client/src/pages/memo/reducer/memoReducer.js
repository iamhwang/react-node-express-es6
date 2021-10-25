import { createSlice } from '@reduxjs/toolkit';
import { requestMemosGetApi } from '../api/memoApi';

const initialState = {
  memos : [{ NO: '', MEMO: '' }],
  memo: '',
};

const reducers = {
  setMemos(state, { payload: { memos } }) {
    return {
      ...state,
      memos,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'memo',
  initialState,
  reducers,
});

export const { 
  setMemos, 
} = actions;

export function requestMemosInit() {
  return async (dispatch, getState) => {
    const { user: { username } } = getState();
    const { data } = await requestMemosGetApi({ username });
    console.log(data);
    dispatch(setMemos({ memos: data }))
  };
}

export default reducer;
