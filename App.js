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



const App: () => React$Node = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>COVID-19 CASES APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:20,
    fontWeight:'700'
  }
});

export default App;
