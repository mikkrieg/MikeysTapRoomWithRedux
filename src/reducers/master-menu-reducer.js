import * as c from '../actions/ActionTypes';
import { MasterMenu } from './../components/BeerList';

export default (state = {MasterMenu}, action) => {
  const { name, brand, price, alcohol, quantity, fullKeg, country, id } = action;
  switch(action.type) {
    case c.ADD_KEG:
      return Object.assign({MasterMenu}, state, {
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