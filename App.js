import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import{ useFonts } from 'expo-font';
import AppLoading from 'expo';

import AppNavigator from './src/navigator/Navigator'
import Login from './src/screens/Login'
import Register from './src/screens/Register'


export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./src/fonts/Montserrat-Bold.ttf'),
    MontserratRegular: require('./src/fonts/Montserrat-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
