import React from 'react'
import { View, Text,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {colors} from "../config/colors";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Data=[{id:'1',country:'India'},
            {id:'2',country:'USA'},
            {id:'3',country:'Japan'}]

const Item=({item})=>(<TouchableOpacity style={styles.countryItem}>
    <Text style={styles.countryText}>{item}</Text>
    <FontAwesome5 size={20} color={colors.secondary}  name={'arrow-right'} />
    </TouchableOpacity>)
   
const renderItem=({item})=>(<Item item={item.country} />)

const CountryListing = () => {
    return (
        <View style={styles.container}>
          <FlatList data={Data}  renderItem={renderItem}  />
        </View>
    )
}

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    countryItem:{
         display:'flex',
         flexDirection:'row',
         justifyContent:'space-between',
         backgroundColor:colors.primary,
         padding:15,
         marginVertical:5,
         marginHorizontal:5
    },
    countryText:{
        fontSize:20,
        color:colors.secondary
    }
})

export default CountryListing
