import * as c from '../actions/ActionTypes';

export default(state = null, action) => {
  const { id, quantity } = action;
  switch(action.type) {
    case c.CHANGE_QUANTITY:
      return quantity
    default:
      return state;
  }
}