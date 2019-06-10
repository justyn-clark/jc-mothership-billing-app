import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const propTypes = {
  pickupLocation: PropTypes.object.isRequired,
  deliveryLocation: PropTypes.object.isRequired,
};

const Locations = props => {
  return (
    <Wrapper>
      <div className="pickup">
        <p>{props.pickupLocation.name}</p>
        <span>
          {props.pickupLocation.city}, {props.pickupLocation.zip}
        </span>
      </div>
      <div className="delivery">
        <p>{props.deliveryLocation.name}</p>
        <span>
          {props.deliveryLocation.city}, {props.deliveryLocation.zip}
        </span>
      </div>
    </Wrapper>
  );
};

Locations.propTypes = propTypes;
export default Locations;
