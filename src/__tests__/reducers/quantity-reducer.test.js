import quantityReducer from './../../reducers/quantity-reducer';
import * as c from '../../actions/ActionTypes';

describe("quantityReducer", () => {
  test('Should return default state if no action is recognized', () => {
    expect(quantityReducer(null, {type: null})).toEqual(null);
  });

  test('Should change quantity state to whatever is passed in', () => {
    expect(quantityReducer(null, {type: c.CHANGE_QUANTITY, quantity: 1})).toEqual(1);
  });
});