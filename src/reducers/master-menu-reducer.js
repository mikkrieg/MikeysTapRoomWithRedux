import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, alcohol, quantity, fullKeg, country, id } = action;
  switch(action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcohol: alcohol,
          quantity: quantity,
          fullKeg: fullKeg, 
          country: country,
          id: id
        }
      });
    default: 
      return state;
  }
};