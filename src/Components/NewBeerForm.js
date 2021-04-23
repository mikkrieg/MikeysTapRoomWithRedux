import React from 'react';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewBeerForm(props) {
  return(
    <ReusableForm 
    handleFormSubmission={handleNewBeerSubmission}
    buttonText="Cheers!"/>
  );
  function handleNewBeerSubmission(e) {
    e.preventDefault();
    props.handleBeerCreation
    ({
      name: e.target.name.value, 
      brand: e.target.brand.value, 
      price: parseFloat(e.target.price.value), 
      quantity: 124,
      fullKeg: 124,
      alcohol: parseFloat(e.target.alcohol.value),
      country: e.target.country.value,
      id: v4()
    });
  }
}

NewBeerForm.propTypes = {
  handleBeerCreation: PropTypes.func
}

export default NewBeerForm;
