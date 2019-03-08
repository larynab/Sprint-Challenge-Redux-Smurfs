import React from 'react';

function Smurf(props) {

  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};


export default Smurf;