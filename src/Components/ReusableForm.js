import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.handleFormSubmission}>
        <input 
        type="text"
        name="name"
        placeholder="Name"/>
        <input
        type="text"
        name="brand"
        placeholder="Brand"/>
        <input
        type="number"
        name="price"
        placeholder="Price"
        min="1"/>
        <input
        type="number"
        name="quantity"
        placeholder="Amount"/>
        <input
        type="number"
        name="alcohol"
        placeholder="Alcohol Content"/>
        <input
        type="number"
        name="fullStock"
        placeholder="Max amount"
        max="200"
        min="1"/>
        <input
        type="text"
        name="country"
        placeholder="Country of origin"/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  handleFormSubmission: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;