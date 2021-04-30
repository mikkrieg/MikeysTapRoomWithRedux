import quantityReducer from './../../reducers/quantity-reducer';
import * as c from '../../actions/ActionTypes';

describe("quantityReducer", () => {
  test('Should return default state if no action is recognized', () => {
    expect(quantityReducer(null, {type: null})).toEqual(null);
  });

  test('Should reduce quantity by one when a pint is purchased', () => {
    expect(quantityReducer(null, {type: c.BUY_PINT, quantity: 1})).toEqual(0);
  });

  test('Should replenish quantity to 124 pints when a keg is changed', () => {
    expect(quantityReducer(null, {type: c.CHANGE_KEG, quantity: 1})).toEqual(124);
  });
});