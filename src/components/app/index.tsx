import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getAuthStatusSelector} from '../../store/selectors';

import {Url} from '../../constants/urls';
import {Header} from '../header';
import {Footer} from '../footer';
import {PrivateRoute} from '../private-route';
import {MainComponent} from '../pages/main';
import {LoginComponent} from '../pages/login';
import {ProfileComponent} from '../pages/profile';
import {NotFoundPage} from '../pages/not-found';
import {NewsComponent} from '../pages/news';

export const App = () => {
  const authStatus = useSelector(getAuthStatusSelector);

  return (
    <BrowserRouter>
        <Header
          authStatus={authStatus}
        />
          <Switch>
            <Route path={Url.MAIN} exact>
              <MainComponent />
            </Route>
            <Route path={Url.NEWS} exact>
              <NewsComponent />
            </Route>
            <Route path={Url.LOGIN} exact>
              <LoginComponent
                authStatus={authStatus}
              />
            </Route>
            <PrivateRoute
              exact
              path={Url.PROFILE}
              render={() => (<ProfileComponent username='testUser' />)}
              authStatus={authStatus}
            />
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
