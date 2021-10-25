import { combineReducers } from 'redux';

import user from '../pages/user/reducer/userReducer';
import memo from '../pages/memo/reducer/memoReducer';


export default combineReducers({ 
  user,
  memo,
});

