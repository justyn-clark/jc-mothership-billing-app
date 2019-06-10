import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from 'actions/UserActions';
import BillingPage from 'components/BillingPage';
import 'react-table/react-table.css';
import { selectItems, selectBilling } from 'selectors';

const propTypes = {
  onLoadUser: PropTypes.func,
};

const BillingPageContainer = props => <BillingPage {...props} />;

const mapDispatchToProps = dispatch => ({
  onLoadUser: () => dispatch(loadUser()),
});

const mapStateToProps = state => ({
  items: selectItems(state),
  billing: selectBilling(state),
});

BillingPageContainer.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BillingPageContainer);
