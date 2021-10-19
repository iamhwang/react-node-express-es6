import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataaa: 'dataaa',
};


const reducers = {
  setData(state, { payload: { dataaa } }) {
    return {
      ...state,
      dataaa,
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'k-concept',
  initialState,
  reducers,
});

export const {
  setData,
} = actions;

export function requestdataaa() {
  return async (dispatch, getState) => {
    //const { loginFields } = getState();
    //const { id, no, accessToken } = await requestUserLoginAPI(loginFields);
    //dispatch(setUserLogin({ id, no, accessToken }));

    console.log('request dataaa');
  };
}

export default reducer;
