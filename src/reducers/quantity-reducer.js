import * as c from '../actions/ActionTypes';

export default(state = null, action) => {
  const { quantity } = action;
  switch(action.type) {
    case c.BUY_PINT:
      console.log("Buy pint triggered")
      if(quantity > 0) {
        return {
          ...state,
          quantity: quantity - 1
        }
      }
    case c.CHANGE_KEG:
      console.log("restock triggered")
      return {
        ...state,
        quantity: 124
      }
    default:
      return state;
  }
}