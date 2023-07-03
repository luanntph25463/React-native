import { View, Text ,FlatList} from 'react-native'
import React,{Component} from 'react'

class L72Class extends Component {
    constructor(props){
        super(props);
        this.state={
             data: [],
        }
        fetch('link').then((response)=>response.json()),then((json)=>{this.setState({data:json.movies})})
        .catch((error)=>console.error(error))
    }
    render(){
        return (
            <View>
              <FlatList data={data}/>
            </View>
          )
    }
}

export default L72Class