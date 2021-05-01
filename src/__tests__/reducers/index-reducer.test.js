import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import masterMenuReducer from '../../reducers/master-menu-reducer';
import * as c from '../../actions/ActionTypes';
import { createStore } from 'redux';


describe("rootReducer", () => {
  let store = createStore(rootReducer);

  test('Should return default state if no action type is passed in', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterMenu: {},
      formVisibleOnPage: false,
      selectedBeer: null,
      quantity: null
    });
  });

  test('Check that initial state of masterMenuReducer matches whats in root reducer', () => {
    expect(store.getState().masterMenu).toEqual(masterMenuReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches whats in root reducer', () => {
      expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for masterMenuReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'Coors Light',
      brand: 'Coors',
      price: 5,
      alcohol: 4,
      country: 'USA',
      quantity: 20,
      fullKeg: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterMenu).toEqual(masterMenuReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
  
});