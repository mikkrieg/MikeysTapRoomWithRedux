
import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import masterMenuReducer from './master-menu-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMenu: masterMenuReducer
});

export default rootReducer;