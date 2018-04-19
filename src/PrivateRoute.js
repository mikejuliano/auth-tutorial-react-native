import React, {Component} from 'react';

export default PrivateRoute = ({component: Component, ...rest}) => (
  <Route { ...rest } render={ props => {
    const authService = props.authService;
    return (
      authService.isAuthenticated ? (
        <Component { ...props }/>
      ) : (
        <Redirect to={ {
          pathname: '/login',
          state: {from: props.location}
        } }/>
      )
    );
  } }/>
);