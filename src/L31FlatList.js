import { View, Text ,FlatList,StyleSheet} from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        
    },
    item:{
        padding: 15,
        height:40,
        fontSize:20
    }
})
const L31FlatList = () => {
  return (
    <View>
      <FlatList data= {[
        {key:"A"},
        {key:"C"},
        {key:"B"}
      ]} renderItem={({item})=> <Text>{item.key}</Text>}
      />
    </View>
  )
}

export default L31FlatList