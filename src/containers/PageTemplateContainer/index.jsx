import React from 'react';
import { connect } from 'react-redux';
import PageTemplate from 'components/PageTemplate/PageTemplate';

const PageTemplateContainer = props => <PageTemplate {...props} />;

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageTemplateContainer);
