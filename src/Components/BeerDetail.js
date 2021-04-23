import React from 'react';

function BeerDetail(props) {
  const {beer} = props;
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}


export default BeerDetail;