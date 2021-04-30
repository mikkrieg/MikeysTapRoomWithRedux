import selectedBeerReducer from './../../reducers/selected-beer-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedBeerReducer", () => {
  test('Should return default state if no action is recognized', () => {
    expect(selectedBeerReducer(null, {type: null})).toEqual(null);
  });

  test('Should select a beer and change state to selected ID', () => {
    expect(selectedBeerReducer(null, {type: c.SELECT_BEER, id: 1})).toEqual(1);
  });
});