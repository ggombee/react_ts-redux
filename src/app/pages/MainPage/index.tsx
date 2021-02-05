import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Redirect
import { URLs } from '../../../utils/routes';

import Header from './Header';
import MainContainer from '../../containers/MainContainer';
import PurchasePage from './purchase';
import SellPage from './sell';

function MainPage(): React.ReactElement {
  return (
    <>
      <Header />
      <MainContainer />
      <Switch>
        {/* <Redirect exact={true} path={URLs.PURCHASE} component={PurchasePage} /> */}
        <Route exact path={URLs.PURCHASE} component={PurchasePage} />
        <Route path={URLs.SELL} component={SellPage} />
      </Switch>
    </>
  );
}

export default MainPage;
