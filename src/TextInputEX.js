import React, { useState } from 'react'

import { View, Text,TextInput } from 'react-native'

const TextInputEX = () => {
    const [text, setText]= useState('');
  return (
    <View>
      <TextInput style ={{height:50}} placeholder='nhập'
      onChangeText={text=>setText(text)}
      defaultValue={text}/>
      <Text style={{padding: 10,fontSize:30}}>{text.split(' ').map((word)=>word && 'Dịch').join(' ')}</Text>
    </View>
  )
}

export default TextInputEX