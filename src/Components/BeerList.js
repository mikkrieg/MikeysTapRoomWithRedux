import React from 'react';
import { v4 } from 'uuid'
import Beer from './Beer'
import PropTypes from 'prop-types';


function BeerList(props) {
  return(
    <>
      <hr/>
      {props.beerList.map((beer) => 
        <Beer 
        name={beer.name}
        brand={beer.brand}
        price={beer.price}
        alcoholContent={beer.alcohol}
        quantity={beer.quantity}
        fullKeg={beer.fullKeg}
        country={beer.country} 
        key={beer.id}
        id={beer.id}
        selectedBeer={props.selectedBeer}
        restockButtonClick={props.restockButton}
        buyButtonClick={props.buyButton}
        />
        )}
    </>
  );
}

export default BeerList;

BeerList.propTypes = {
  beerList: PropTypes.array,
  selectedBeer: PropTypes.func,
  restockButton: PropTypes.func,
  buyButton: PropTypes.func
}
export const MasterMenu = [
  {
    name: "CoorsLight",
    brand: "Coors",
    price: 4.00,
    alcohol: 4.5,
    quantity: 20,
    fullKeg: 124,
    country: "America",
    id: v4()
  },
  {
    name: "BudLight",
    brand: "Budweiser",
    price: 3.00,
    alcohol: 5,
    quantity: 30,
    fullKeg: 124,
    country: "America",
    id: v4()      
  },
  {
    name: "RPM IPA",
    brand: "Boneyard",
    price: 5.00,
    alcohol: 6.5,
    quantity: 40,
    fullKeg: 124,
    country: "America",
    id: v4()    
  },
  {
    name: "Fresh Squeezed IPA",
    brand: "Deschutes",
    price: 5.00,
    alcohol: 6.5,
    quantity: 50,
    fullKeg: 124,
    country: "America",
    id: v4()    
  }
] 
