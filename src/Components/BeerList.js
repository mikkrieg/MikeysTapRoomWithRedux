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
        country={beer.country} 
        key={beer.id}
        id={beer.id}
        selectedBeer={props.selectedBeer}
        restockButtonClick={props.restockButton}
        buyButtonClick={props.buyButton}
        stateQuantity={props.stateQuantity}
        />
        )}
    </>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  selectedBeer: PropTypes.func,
  restockButton: PropTypes.func,
  buyButton: PropTypes.func,
  stateQuantity: PropTypes.number
}

export default BeerList;