/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <View style={styles.Container}>
      <NavigationContainer>
      <Stack.Navigator  initialRouteName="SplashScreen"  screenOptions={{ headerShown: false}}  >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="CountryListing" component={CountryListing} />
        <Stack.Screen name="CasesByDate" component={CasesByDate} />
      </Stack.Navigator>
    </NavigationContainer>
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
