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
      MasterMenu: MasterMenu,
      selectedBeer: null
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

  handleAddingNewBeerToMenu = (newBeer) => {
    const newMasterMenu = this.state.MasterMenu.concat(newBeer);
    this.setState({
      MasterMenu: newMasterMenu,
      formVisible: false
    });
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.MasterMenu.filter(beer => beer.id === id)[0];
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
      console.log(typeof(MasterMenu))
      currentVisibleState = <BeerList 
        beerList={this.state.MasterMenu}
        selectedBeer={this.handleChangingSelectedBeer}/>;
      buttonText = "Add Beer";
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