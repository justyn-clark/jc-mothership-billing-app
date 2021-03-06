import React from 'react';
import { useSelector } from 'react-redux';
import { makeSelectUser } from 'selectors';
import LogOutWrap from 'components/TopMenu/LogOutWrap';
import StyledUl from 'components/TopMenu/StyledUl';
import ArrowDown from 'components/UI/UI.ArrowDown';
import Logo from 'images/Logo.svg';
import QuoteIcon from 'images/QuoteIcon.svg';
import Tracking from 'images/Tracking.svg';
import Billing from 'images/Billing.svg';
import Account from 'images/Account.svg';
import Help from 'images/Help.svg';
import LinkWrap from './LinkWrap';
import Link from './Link';
import StyledHeader from './StyledHeader';

const TopBar = () => {
  const user = useSelector(makeSelectUser);
  return (
    <StyledHeader>
      <Link exact to="/" className="logo">
        <img src={Logo} alt="Logo" />
        Mothership
      </Link>
      <LinkWrap>
        <StyledUl>
          <Link to="/get-a-quote" className="quote">
            <img src={QuoteIcon} alt="QuoteIcon" />
            Get a Quote
          </Link>
          <Link to="/tracking">
            <img src={Tracking} alt="Tracking" />
            Tracking
          </Link>
          <Link to="/billing">
            <img src={Billing} alt="Billing" />
            Billing
          </Link>
          <Link to="/account">
            <img src={Account} alt="Account" />
            Account
          </Link>
          <Link to="/help">
            <img src={Help} alt="Help" />
            Help
          </Link>
        </StyledUl>
      </LinkWrap>
      <LogOutWrap>
        <h3>{user && user.firstName}</h3>
        <ArrowDown />
      </LogOutWrap>
    </StyledHeader>
  );
};

export default TopBar;
