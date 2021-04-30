import * as c from './ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, alcohol, quantity, fullKeg, country, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    country: country,
    quantity: quantity,
    fullKeg: fullKeg,
    id: id
  }
};