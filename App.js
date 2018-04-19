import React from 'react';
import styles from './src/styles';
import {Text, View} from 'react-native';
import {Link, NativeRouter, Redirect, Route} from 'react-router-native';

import LoginScreen from './src/LoginScreen';
import AuthButton from './src/AuthButton';
import PrivateRoute from './src/PrivateRoute';
import AuthService from './src/AuthService';

const authService = new AuthService();

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={ styles.container }>
          <AuthButton/>
          <View style={ styles.nav }>
            <Link
              to="/public"
              style={ styles.navItem }
              underlayColor='#f0f4f7'>
              <Text>Public Page</Text>
            </Link>
            <Link
              to="/protected"
              style={ styles.navItem }
              underlayColor='#f0f4f7'>
              <Text>Protected Page</Text>
            </Link>
          </View>

          <Route path="/public" component={ PublicScreen }/>
          <Route path="/login" component={ LoginScreen }/>
          <PrivateRoute path="/protected" component={ ProtectedScreen } authService={ authService }/>
        </View>
      </NativeRouter>
    );
  }
}

const PublicScreen = () => <Text style={ styles.header }>Public</Text>;
const ProtectedScreen = () => <Text style={ styles.header }>Protected</Text>;