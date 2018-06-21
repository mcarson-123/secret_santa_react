import { combineReducers } from 'redux';
import PartyReducer from './reducer_party';

const rootReducer = combineReducers({
  party: PartyReducer
});

export default rootReducer;
