import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { convertUrlPathToString } from 'utils/helpers';
import Wrapper from './Wrapper';

const propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

const defaultProps = {
  location: {},
};

const PageTemplate = props => (
  <Wrapper>
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
    <h1>{convertUrlPathToString(props.location.pathname)}</h1>
  </Wrapper>
);

PageTemplate.propTypes = propTypes;
PageTemplate.defaultProps = defaultProps;
export default PageTemplate;
