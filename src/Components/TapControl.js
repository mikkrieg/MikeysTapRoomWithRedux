import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import {MasterMenu} from './BeerList';

class TapControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisible: false,
      MasterMenu: MasterMenu
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleAddingNewBeer = () => {

  }


  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.state.formVisible) {
      currentVisibleState = <NewBeerForm handleBeerCreation={this.handleAddingNewBeer}/>;
      buttonText = "Return to list";
    } else {
      console.log(typeof(MasterMenu))
      currentVisibleState = <BeerList beerList={this.state.MasterMenu}/>;
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