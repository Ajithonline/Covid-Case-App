import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const SplashScreen = () => {
    return (
        <View style={styles.Container}>
         <Text style={styles.title}>COVID-19 CASES APP</Text>
        </View>
    )
}

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

export default SplashScreen
