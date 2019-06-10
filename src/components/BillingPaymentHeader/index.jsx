import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from 'components/Search';
import PaymentsDropdown from 'components/PaymentsDropdown';
import ArrowDown from 'components/UI/UI.ArrowDown';
import SearchIcon from 'images/SearchIcon.svg';
import Wrapper from './Wrapper';

const propTypes = {
  billing: PropTypes.object,
};

const BillingPaymentHeader = props => {
  const [isShowPaymentMenu, setShowPaymentMenu] = useState(false);
  const {
    billing: { balance },
    billing: { paymentMethods = {} },
  } = props;
  return (
    <Wrapper>
      <div className="payments">
        <p>Your Balance: {`$${balance}`}</p>
        <div>
          <span>
            Payment Method:{' '}
            {paymentMethods.bankAccounts &&
              `${paymentMethods.bankAccounts[0].brand} *${
                paymentMethods.bankAccounts[0].last4
              }`}
          </span>
          <ArrowDown
            color="black"
            onClick={() => setShowPaymentMenu(!isShowPaymentMenu)}
          />
          {isShowPaymentMenu && <PaymentsDropdown {...props} />}
        </div>
      </div>
      <div className="search">
        <Search />
        <img src={SearchIcon} alt="Search" />
      </div>
    </Wrapper>
  );
};

BillingPaymentHeader.propTypes = propTypes;
export default BillingPaymentHeader;
