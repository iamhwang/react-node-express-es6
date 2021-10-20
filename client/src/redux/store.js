import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './slice';

const store = configureStore({
  reducer: rootReducer
});
console.log(store.getState());

export default store;
