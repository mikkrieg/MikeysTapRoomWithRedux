import masterMenuReducer from './../../reducers/master-menu-reducer';
import { MasterMenu } from './../../components/BeerList';
import * as c from '../../actions/ActionTypes';

describe('masterMenuReducer', () => {
  let action;
  const kegData = {
    name: 'Coors Light',
    brand: 'Coors',
    price: 5,
    alcohol: 4,
    country: 'USA',
    quantity: 20,
    fullKeg: 124,
    id: 1
  }
  
  test('Should return default state if there is no action type passed in', () => {
      expect(masterMenuReducer({MasterMenu}, {type: null})).toEqual({MasterMenu});
  });

  test('Should successfully add keg to master menu', () => {
    const { name, brand, price, alcohol, country, quantity, fullKeg, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      country: country,
      quantity: quantity,
      fullKeg: fullKeg,
      id: id
    };

    expect(masterMenuReducer({MasterMenu}, action)).toEqual({
      MasterMenu,
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        country: country,
        quantity: quantity,
        fullKeg: fullKeg,
        id: id
      }
    });
  });
});