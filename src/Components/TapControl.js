import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import * as a from './../actions/index';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class TapControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeer: null,
      quantity: null
    };
  }

  handleClick = () => {
    if(this.state.selectedBeer != null){
      this.setState({
        selectedBeer: null
      })
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    } 
  }

  handleBuyButton = (id) => {
    const selectedBeer = this.props.masterMenu[id];
    if(selectedBeer.quantity >= 1) {
      selectedBeer.quantity--;
    }
    this.setState({
      quantity: selectedBeer.quantity
    })
  }

  handleRestockButton = (id) => {
    const beer = this.props.masterMenu[id];
    beer.quantity = beer.fullKeg;
    this.setState({
      quantity: beer.quantity
    })
  }

  handleAddingNewBeerToMenu = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.props.masterMenu[id];
    this.setState({
      selectedBeer: selectedBeer
    });
  } 


  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.props.formVisibleOnPage) {
      currentVisibleState = <NewBeerForm handleBeerCreation={this.handleAddingNewBeerToMenu}/>;
      buttonText = "Return to list";
    } else if(this.state.selectedBeer != null){
      currentVisibleState = <BeerDetail beer={this.state.selectedBeer}/>;
      buttonText = "Return to list";
    } else {
      currentVisibleState = <BeerList 
        beerList={this.props.masterMenu}
        selectedBeer={this.handleChangingSelectedBeer}
        restockButton={this.handleRestockButton}
        buyButton={this.handleBuyButton}/>;
        buttonText = "Add keg";
    }
    return(
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

TapControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
  masterMenu: PropTypes.object
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    masterMenu: state
  } 
  
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
