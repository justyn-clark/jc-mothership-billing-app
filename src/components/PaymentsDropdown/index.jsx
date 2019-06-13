import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid';
import PlusIcon from 'images/PlusIcon.svg';
import DropDownWrap from './DropDownWrap';

const PaymentsDropdown = () => {
  const billing = useSelector(state => state.userInfo.billing);
  const { paymentMethods = {} } = billing;
  return (
    <DropDownWrap>
      <div style={{ padding: '2rem' }}>
        {paymentMethods &&
          paymentMethods.cards.map(item => (
            <li key={uuid.v4()}>
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

export default PaymentsDropdown;
