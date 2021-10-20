import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'iamhwang',
};

const { actions, reducer } = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setUser(state, { payload: { user } }) {
      return {
        ...state,
        user,
      };
    },
  },
});

export const { setUser } = actions;


export function requestUSER() {
  return async (dispatch, getState) => {
    console.log('requestUSER !!!!!!!!!!!!!');
    dispatch(setUser({ user: 'hi' }));
    const { user } = getState();
    
    console.log(user);
  };
}

export default reducer;
