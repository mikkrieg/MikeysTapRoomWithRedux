import React from 'react';
import { v4 } from 'uuid'
import Beer from './Beer'
import PropTypes from 'prop-types';


function BeerList(props) {
  console.log(props)
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
        fullStock={beer.fullStock}
        country={beer.country} 
        key={beer.id}
        id={beer.id}
        selectedBeer={props.selectedBeer}
        />
        )}
    </>
  );
}

export default BeerList;

BeerList.propTypes = {
  beerList: PropTypes.array,
  selectedBeer: PropTypes.func
}
export const MasterMenu = [
  {
    name: "CoorsLight",
    brand: "Coors",
    price: 4.00,
    alcohol: 4.5,
    quantity: 20,
    fullStock: 100,
    country: "America",
    id: v4()
  },
  {
    name: "BudLight",
    brand: "Budweiser",
    price: 3.00,
    alcohol: 5,
    quantity: 25,
    fullStock: 100,
    country: "America",
    id: v4()      
  },
  {
    name: "RPM IPA",
    brand: "Boneyard",
    price: 5.00,
    alcohol: 6.5,
    quantity: 15,
    fullStock: 200,
    country: "America",
    id: v4()    
  },
  {
    name: "Fresh Squeezed IPA",
    brand: "Deschutes",
    price: 5.00,
    alcohol: 6.5,
    quantity: 5,
    fullStock: 50,
    country: "America",
    id: v4()    
  }
] 
