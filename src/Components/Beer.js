import React from 'react';
import PropTypes from 'prop-types';


function Beer(props) {
  return(
    <React.Fragment>
      <div onClick={() => props.selectedBeer(props.id)}>
        <h3>{props.name} - QTY: {props.quantity > 0 ? props.quantity : "Empty"} {props.quantity > 0 ? "pints" : "" }</h3>
        <h4>Price: ${props.price} per pint</h4>
        <hr/>
      </div>
      <button>Buy pint</button>
      <button onClick={() => props.restockButton(props.id)}>Change keg</button>
      <hr/>
    </React.Fragment>
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
  restockButton: PropTypes.func
}

export default Beer;