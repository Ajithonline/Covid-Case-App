import React from 'react'
import { View, Text,StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { colors } from '../config/colors'

const Data=[{id:'1',date:'12th july 2020',cases:1},
            {id:'2',date:'13th july 2020',cases:3},
            {id:'3',date:'14th july 2020',cases:3}]

            
const Item=({item})=>(
   <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.date}</Text>
      <Text style={styles.title}>{item.cases}</Text>
      </TouchableOpacity>
)

const renderItem=({item})=>(
    <Item item={item} />
)

const CasesByDate = () => {
    return (
        <View style={styles.container}>
            <FlatList data={Data} renderItem={renderItem} />
        </View>
    )
}

export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    item:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:colors.primary,
        padding:15,
        marginHorizontal:5,
        marginVertical:5
    },
    title:{
        color:colors.secondary,
        fontSize:18
    }
})

export default CasesByDate
