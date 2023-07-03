import { View, Text, Button } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
      onPress={()=> navidaton.navigate('SecondScreen')}
      title="goi den trang khac"
      />
    </View>
  )
}
const SecondScreen = () => {
    return (
      <View>
        <Text>SecondScreen</Text>
      </View>
    )
  }
const Stack = createStackNavigator();
const L81Class = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HOme'>
            <Stack.Screen name="HOmeScreen" component={HomeScreen}/>
            <Stack.Screen name="secondScreen" component={SecondScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
export default L81Class