import React, {Component} from 'react';
import styles from './styles';
import {Text, TouchableHighlight, View} from 'react-native';
import {Redirect, Route, withRouter} from 'react-router-native';

export default class LoginScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.authService = props.authService;
    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    this.authService.authenticate(() => {
      this.setState({redirectToReferrer: true});
    });
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if(redirectToReferrer) {
      return (
        <Redirect to={ from }/>
      )
    }

    return (
      <View>
        <Text>You must log in to view the page at { from.pathname }</Text>

        <TouchableHighlight style={ styles.btn } underlayColor='#f0f4f7' onPress={ this.login }>
          <Text>Log in</Text>
        </TouchableHighlight>
      </View>
    )
  }
}