import React from 'react';
import Beer from './Beer';
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

BeerList.propTypes = {
  beerList: PropTypes.object,
  selectedBeer: PropTypes.func,
  restockButton: PropTypes.func,
  buyButton: PropTypes.func
}

export default BeerList;


