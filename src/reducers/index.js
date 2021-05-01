
import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import masterMenuReducer from './master-menu-reducer';
import selectedBeerReducer from './selected-beer-reducer';
import quantityReducer from './quantity-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMenu: masterMenuReducer,
  selectedBeer: selectedBeerReducer,
  quantity: quantityReducer
});

export default rootReducer;