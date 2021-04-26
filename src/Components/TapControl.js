import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import {MasterMenu} from './BeerList';
import BeerDetail from './BeerDetail';

class TapControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisible: false,
      masterMenu: MasterMenu,
      selectedBeer: null,
      quantity: null
    };
  }

  handleClick = () => {
    if(this.state.selectedBeer != null){
      this.setState({
        formVisible: false,
        selectedBeer: null
      })
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    } 
  }

  handleBuyButton = (id) => {
    const selectedBeer = this.state.masterMenu.filter(beer => beer.id === id)[0];
    if(selectedBeer.quantity >= 1) {
      selectedBeer.quantity--;
    }
    this.setState({
      quantity: selectedBeer.quantity
    })
  }

  handleRestockButton = (id) => {
    const beer = this.state.masterMenu.filter(beer => beer.id === id)[0];
    beer.quantity = beer.fullKeg;
    this.setState({
      quantity: beer.quantity
    })
  }

  handleAddingNewBeerToMenu = (newBeer) => {
    const newMasterMenu = this.state.masterMenu.concat(newBeer);
    this.setState({
      masterMenu: newMasterMenu,
      formVisible: false
    });
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterMenu.filter(beer => beer.id === id)[0];
    this.setState({
      selectedBeer: selectedBeer
    });
  } 


  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.state.formVisible) {
      currentVisibleState = <NewBeerForm handleBeerCreation={this.handleAddingNewBeerToMenu}/>;
      buttonText = "Return to list";
    } else if(this.state.selectedBeer != null){
      currentVisibleState = <BeerDetail beer={this.state.selectedBeer}/>;
      buttonText = "Return to list";
    } else {
      currentVisibleState = <BeerList 
        beerList={this.state.masterMenu}
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

export default TapControl;
