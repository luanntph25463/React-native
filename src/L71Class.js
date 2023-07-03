import { FlatList, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const L71Class = () => {
  // doc du lieu
    const [text,setData] = useState([]);
    const [load,setLoad] = useState(true);
    useEffect(()=>{
      fetch('movie.json').then((response)=>response.json()).then((json)=>setData(json.movies))
      .catch((error)=>console.error(error)).finally(()=>setLoad(false));
    },[]);
  return (
    <View>
      <FlatList 
      data="data"
      renderItem={({item})=>(<Text>{item.title}</Text>)}
      />
    </View>
  )
}

export default L71Class

const styles = StyleSheet.create({})