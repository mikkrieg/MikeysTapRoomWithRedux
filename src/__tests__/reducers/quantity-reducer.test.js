import quantityReducer from './../../reducers/quantity-reducer';
import * as c from '../../actions/ActionTypes';

describe("quantityReducer", () => {
  test('Should return default state if no action is recognized', () => {
    expect(quantityReducer(0, {type: null})).toEqual(0);
  });

  test('Should reduce quantity by one when a pint is purchased', () => {
    expect(quantityReducer(0, {type: c.BUY_PINT, quantity: 1})).toEqual({quantity: 0});
  });

  test('Should replenish quantity to 124 pints when a keg is changed', () => {
    expect(quantityReducer(0, {type: c.CHANGE_KEG, quantity: 1})).toEqual({quantity: 124});
  });
});