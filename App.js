/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";
import CountryListing from "./src/screens/CountryListing";
import CasesByDate from "./src/screens/CasesByDate";
const App: () => React$Node = () => {
  return (
    <View style={styles.Container}>
     <CasesByDate/>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display:'flex',
    flex:1,

  },
 
});

export default App;
