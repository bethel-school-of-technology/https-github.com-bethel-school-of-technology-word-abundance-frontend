// export { default as blogs } from './blogs'; 

import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
// import { blogs } from './reducers';

export default combineReducers({
  auth,
  // blogs,
  form: formReducer,
});