/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {View, Text } from 'react-native';
import firebase from 'firebase'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './component/LoginForm'
import Router from './Router'


class App extends Component {

  UNSAFE_componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyApQsLxOMh67G2k4sBzkNYLJx7kounmIY0",
      authDomain: "auth-1d99d.firebaseapp.com",
      databaseURL: "https://auth-1d99d.firebaseio.com",
      projectId: "auth-1d99d",
      storageBucket: "auth-1d99d.appspot.com",
      messagingSenderId: "602036729833",
      appId: "1:602036729833:web:3a7553053338556199fd78",
      measurementId: "G-N11F2QQJ2N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }


  render() {
      const store = createStore(reducers,
        compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )                
    )
    // const store = createStore(reducers, {}, applyMiddleware(thunk) )
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>

    )
  }
}


export default App;
