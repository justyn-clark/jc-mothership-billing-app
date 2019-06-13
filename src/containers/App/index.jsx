import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'global-styles';
import BillingPage from 'components/BillingPage/Loadable';
import PageTemplate from 'components/PageTemplate/Loadable';
import TopMenu from 'components/TopMenu';
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
        <TopMenu />
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
