import React from 'react';
import { connect } from 'react-redux';
import TopMenu from 'components/TopMenu';
import { selectUser } from 'selectors';

const TopMenuContainer = props => <TopMenu {...props} />;

const mapStateToProps = state => ({
  user: selectUser(state),
});

export default connect(mapStateToProps)(TopMenuContainer);
