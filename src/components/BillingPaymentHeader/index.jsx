import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from 'components/Search';
import PaymentsDropdown from 'components/PaymentsDropdown';
import ArrowDown from 'components/UI/UI.ArrowDown';
import SearchIcon from 'images/SearchIcon.svg';
import Wrapper from './Wrapper';

const BillingPaymentHeader = () => {
  const [isShowPaymentMenu, setShowPaymentMenu] = useState(false);
  const billing = useSelector(state => state.userInfo.billing);
  const { balance, paymentMethods = {} } = billing;
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
          {isShowPaymentMenu && <PaymentsDropdown billing={billing} />}
        </div>
      </div>
      <div className="search">
        <Search />
        <img src={SearchIcon} alt="Search" />
      </div>
    </Wrapper>
  );
};

export default BillingPaymentHeader;
