import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from 'src/containers/Main';
import Search from 'src/containers/Search';

//앱 기본 화면
function BasePage(): React.ReactElement {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        {/*<Route exact path="/sell" component={Main} />*/}
        <Route exact path="/search" component={Search} />
      </Switch>
    </>
  );
}

export default BasePage;
