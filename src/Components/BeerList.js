import React from 'react';
import { v4 } from 'uuid'
import Beer from './Beer'
import PropTypes from 'prop-types';


function BeerList(props) {
  return(
    <>
      <hr/>
      {Object.values(props.beerList).map((beer) => 
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
