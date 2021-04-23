import React from 'react';

function BeerDetail(props) {
  const {beer} = props;
  let quantity = (beer.quantity > 0 ? beer.quantity : "Back in stock soon");
  return(
    <>
      <h1>{beer.name} Details</h1>
      <h3>Brand: {beer.brand}</h3>
      <h3>Price: ${beer.price}</h3>
      <h3>ABV: {beer.alcohol}%</h3>
      <h3>Country of Origin: {beer.country}</h3>
      <h3>Stock: {quantity} {quantity > 0 ? "beers" : ""} </h3>
    </>
  )
}


export default BeerDetail;