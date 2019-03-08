import { ERROR, GETTING_SMURFS, GET_SMURFS } from '../actions';

const initialState = {
   smurfs: [],
   gettingSmurfs: false,
  //  addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return{ ...state, gettingSmurfs: true };
    case GET_SMURFS:
      return{ ...state, smurfs: action.payload, gettingSmurfs: false };   
    case ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        error: action.payload
      }    
    default: 
      return state;   
  }
};

export default reducer;