
import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import masterMenuReducer from './master-menu-reducer';
import selectedBeerReducer from './selected-beer-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMenu: masterMenuReducer,
  selectedBeer: selectedBeerReducer
});

export default rootReducer;