import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import MasterMenu from './BeerList';

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


  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.state.formVisible != null) {
      currentVisibleState = <NewBeerForm />;
      buttonText = "Return";
    } else {
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