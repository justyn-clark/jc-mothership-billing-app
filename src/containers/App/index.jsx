import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'global-styles';
import BillingPage from 'containers/BillingPageContainer/Loadable';
import PageTemplate from 'containers/PageTemplateContainer/Loadable';
import TopMenuContainer from 'containers/TopMenuContainer';
import {
  INDEX_PATH,
  GET_QUOTE_PATH,
  TRACKING_PATH,
  BILLING_PATH,
  ACCOUNT_PATH,
  HELP_PATH,
} from 'constants/RouterConstants';

export default function App() {
  return (
    <>
      <Router>
        <TopMenuContainer />
        <Switch>
          <Route exact path={INDEX_PATH} component={PageTemplate} />
          <Route path={GET_QUOTE_PATH} component={PageTemplate} />
          <Route path={TRACKING_PATH} component={PageTemplate} />
          <Route path={BILLING_PATH} component={BillingPage} />
          <Route path={ACCOUNT_PATH} component={PageTemplate} />
          <Route path={HELP_PATH} component={PageTemplate} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}
