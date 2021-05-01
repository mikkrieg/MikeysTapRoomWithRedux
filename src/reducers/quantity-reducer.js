import * as c from '../actions/ActionTypes';

export default(state = null, action) => {
  const { quantity } = action;
  switch(action.type) {
    case c.BUY_PINT:
      return {
        ...state,
        quantity: quantity
      }
    case c.CHANGE_KEG:
      return {
        ...state,
        quantity: quantity
      }
    default:
      return state;
  }
}