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
  }

  handleClick = () => {
    if(this.props.selectedBeer != null){
      const { dispatch } = this.props;
      const action = a.selectBeer(null);
      dispatch(action);
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    } 
  }

  handleBuyButton = (id) => {
    const selectedBeer = this.props.masterMenu[id];
    const { dispatch } = this.props;
    if(selectedBeer.quantity > 0){
      selectedBeer.quantity--
    }
    const action = a.buyPint(selectedBeer.quantity)
    dispatch(action)
  }

  handleRestockButton = (id) => {
    const selectedBeer = this.props.masterMenu[id];
    const { dispatch } = this.props;
    selectedBeer.quantity = 124;
    const action = a.changeKeg(selectedBeer.quantity);
    dispatch(action);
  }

  handleAddingNewBeerToMenu = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedBeer = (id) => {
    const { dispatch } = this.props;
    const selectedBeer = this.props.masterMenu[id];
    const action = a.selectBeer(selectedBeer);
    dispatch(action);
  } 

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.props.formVisibleOnPage) {
      currentVisibleState = <NewBeerForm handleBeerCreation={this.handleAddingNewBeerToMenu}/>;
      buttonText = "Return to list";
    } else if(this.props.selectedBeer != null){
      currentVisibleState = <BeerDetail beer={this.props.selectedBeer}/>;
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
  masterMenu: PropTypes.object,
  selectedBeer: PropTypes.object,
  quantity: PropTypes.object
}

const mapStateToProps = state => {
  
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    masterMenu: state.masterMenu,
    selectedBeer: state.selectedBeer,
    quantity: state.quantity
  } 
  
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;
