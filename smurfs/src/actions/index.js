import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs')
    return dispatch => {
      dispatch({ type: GETTING_SMURFS });
        smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
    };
};
