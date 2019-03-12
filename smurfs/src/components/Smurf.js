import React from 'react';

function Smurf(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.handleDeleteSmurf()}>{`Delete ${
        props.name
      }`}</button>
    </div>
  );
};


export default Smurf;