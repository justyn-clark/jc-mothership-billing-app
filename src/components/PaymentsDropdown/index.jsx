import React from 'react';
import PropTypes from 'prop-types';
import PlusIcon from 'images/PlusIcon.svg';
import DropDownWrap from './DropDownWrap';

const propTypes = {
  billing: PropTypes.object,
};

const PaymentsDropdown = props => {
  const {
    billing: { paymentMethods = {} },
  } = props;
  return (
    <DropDownWrap>
      <div style={{ padding: '2rem' }}>
        {paymentMethods &&
          paymentMethods.cards.map(item => (
            <li key={Math.random()}>
              <input name={item.brand} type="checkbox" /> {item.brand} *
              {item.last4}
            </li>
          ))}
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          borderTop: '1px solid grey',
          width: '100%',
          padding: '0.5rem 2rem',
        }}
      >
        <img src={PlusIcon} alt="PlusIcon" />
        <div>Add Payment Source</div>
      </div>
    </DropDownWrap>
  );
};

PaymentsDropdown.propTypes = propTypes;
export default PaymentsDropdown;
