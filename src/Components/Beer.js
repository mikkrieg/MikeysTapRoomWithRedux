import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {
  let quantity = props.quantity > 0 ? props.quantity : "Empty";
  return(
    <>
      <div onClick={() => props.selectedBeer(props.id)}>
        <h3>{props.name} - QTY: {quantity} {quantity > 0 ? "pints" : "" }</h3>
        <h4>Price: ${props.price} per pint</h4>
      </div>
      <hr/>
      <button onClick={() => props.buyButtonClick(props.id)}>Buy pint</button>
      <button onClick={() => props.restockButtonClick(props.id)}>Change keg</button>
      <hr/>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  brand: PropTypes.string,
  alcoholContent: PropTypes.number,
  fullStock: PropTypes.number,
  country: PropTypes.string,
  id: PropTypes.string,
  restockButtonClick: PropTypes.func,
  buyButtonClick: PropTypes.func
}

export default Beer;