import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BillingPaymentHeader from 'components/BillingPaymentHeader';
import { convertUrlPathToString } from 'utils/helpers';
import BillingTable from './BillingTable';

const propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

const defaultProps = {
  location: {},
};

const BillingPage = props => (
  <>
    <Helmet
      defaultTitle={`Mothership | ${convertUrlPathToString(
        props.location.pathname,
      )}`}
    >
      <meta
        name="description"
        content="It’s 2019, Ship Freight Online | mothership.com‎"
      />
    </Helmet>
    <BillingPaymentHeader {...props} />
    <BillingTable {...props} />
  </>
);

BillingPage.propTypes = propTypes;
BillingPage.defaultProps = defaultProps;
export default BillingPage;
