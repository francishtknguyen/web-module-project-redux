import React from 'react';
import {connect} from 'react-redux'
import AddedFeature from './AddedFeature';

class AddedFeatures extends React.Component {
  render(){
  return (
    <div className="content">
      <h6>Added features:</h6>
      {this.props.car.features.length ? (
        <ol type="1">
          {this.props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
  }
};
const mapStateToProps = (state) => {
  return{
    car: state.car,
  }
}

export default connect(mapStateToProps,{})(AddedFeatures);
