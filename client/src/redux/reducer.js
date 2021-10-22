import { combineReducers } from 'redux';

import user from '../objects/user/reducer/userReducer';
import memo from '../objects/memo/reducer/memoReducer';


export default combineReducers({ 
  user,
  memo,
});

