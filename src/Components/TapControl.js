import React from 'react';

class TapControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisible: false
    };
  }


  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if(this.state.formVisible != null) {
      currentVisibleState = <NewBeerForm />;
      buttonText = "Return";
    } else {
      currentVisibleState = <BeerList />;
      buttonText = "Add Beer";
    }
    return(
        {currentVisibleState}
    );
  }
}