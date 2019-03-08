import { ERROR, GETTING_SMURFS, GET_SMURFS, ADDING_SMURF, ADD_SMURF } from '../actions';

const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   addingSmurf: false,
   error: null
 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return{ ...state, gettingSmurfs: true };
    case GET_SMURFS:
      return{ ...state, smurfs: action.payload, gettingSmurfs: false };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: false };   
    case ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        addingSmurf: false,
        error: action.payload
      }    
    default: 
      return state;   
  }
};

export default reducer;