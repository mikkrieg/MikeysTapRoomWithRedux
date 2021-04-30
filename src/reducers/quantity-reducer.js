import * as c from '../actions/ActionTypes';

export default(state = null, action) => {
  const { quantity, id, fullKeg } = action;
  switch(action.type) {
    case c.BUY_PINT:
      return quantity - 1
    case c.CHANGE_KEG:
      return 124
    default:
      return state;
  }
}