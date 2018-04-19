import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Redirect, Route, withRouter} from 'react-router-native';
import styles from './styles';

export default AuthButton = withRouter(({history, authService}) => (
  authService.isAuthenticated
    ? (
      <View>
        <Text>Welcome!</Text>
        <TouchableHighlight
          style={ styles.btn }
          underlayColor='#f0f4f7'
          onPress={ () => {
            const navigateHome = () => history.push('/');
            authService.logout(navigateHome);
          } }>
          <Text>Sign out</Text></TouchableHighlight>
      </View>
    )
    : <Text>You are not logged in.</Text>
));