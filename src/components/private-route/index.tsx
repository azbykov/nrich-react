import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AuthStatus} from '../../constants/auth-status';
import {Url} from '../../constants/urls';

type PrivateRouteProps = {
  render: () => JSX.Element;
  authStatus: AuthStatus;
} & RouteProps;

export const PrivateRoute = ({render, authStatus, path, exact}: PrivateRouteProps): JSX.Element => (
  <Route
    exact={exact}
    path={path}
    render={() => (
      authStatus === AuthStatus.Auth
        ? render()
        : <Redirect to={Url.LOGIN} />
    )}
  />
);
