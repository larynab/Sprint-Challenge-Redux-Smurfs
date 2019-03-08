import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

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

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf )
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
      newSmurf
    .then(({ data }) => {
      dispatch({ type: ADD_SMURF, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};

export const deleteSmurf = id => {
  const deletedSmurf = axios.delete(`http://localhost:3333/smurfs/:id`, {
    smurf: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    deletedSmurf
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};