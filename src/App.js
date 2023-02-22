import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Text, StyleSheet} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;