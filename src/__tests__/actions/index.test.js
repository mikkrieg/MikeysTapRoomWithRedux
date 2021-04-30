import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('Tap house actions', () => {
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({  name: 'Coors Light', brand: 'Coors', price: 5, alcohol: 4, country: 'USA', quantity: 20,  fullKeg: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Coors Light',
      brand: 'Coors',
      price: 5,
      alcohol: 4,
      country: 'USA',
      quantity: 20,
      fullKeg: 124,
      id: 1
    });
  });

  it('selectBeer should create SELECT_BEER action', () => {
    const id = 1;
    expect(actions.selectBeer(id)).toEqual({
      type: c.SELECT_BEER,
      id: 1
    });
  })
});
