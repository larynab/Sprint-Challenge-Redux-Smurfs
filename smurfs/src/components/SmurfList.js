import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
    render() {
        return (
            <div>
                <h1>Add a Smurf</h1>
                <SmurfForm />
                <h1>Smurf List</h1>
                {this.props.gettingSmurfs ? (
              <h3>Getting Smurfs</h3>
            ) : (
              <div>
                {this.props.smurfs.map(smurf => {
                return (
                    <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}     
                    />
                );
                })}
              </div>
            )}
            {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs, 
      error: state.error, 
      gettingSmurfs: state.gettingSmurfs 
    };
  };
  
  export default connect(mapStateToProps, { getSmurfs })(SmurfList);