import CREATE_PARTY from '../actions/index';

export default function(state = {}, action) {
  // redux promise middleware has alredy taken care of the promise

  switch(action.type) {
    case CREATE_PARTY:
      return { party: action.payload.data }
    default:
      return state;
  }
}
