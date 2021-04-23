import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {
  return(
    <div>
      <h3>{props.name} - QTY: {props.quantity}</h3>
      <h4>Price: {props.price}</h4>
      <button>Buy</button>
      <button>Restock</button>
      <hr/>
    </div>
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
  id: PropTypes.string
}

export default Beer;