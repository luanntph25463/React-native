import { View, Text,SectionList,StyleSheet } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        
    },
    item:{
        padding: 15,
        height:40,
        fontSize:10
    },
    sectionHeader:{
        fontWeight:'bold',
    }
})
const L32FlatList = () => {
  return (
    <View style={styles.container}>
      <Text>
        <SectionList
        sections={[{title: "A",data:["an","ANh","img"]},
    ]}
        renderItem={({item})=><Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section})=><Text>{section.title}</Text>}
        keyExtractor={({item,index})=>index}
        />
      </Text>
    </View>
  )
}

export default L32FlatList