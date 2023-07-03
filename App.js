import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFunc from './src/AppFunc';
import AppClass from './src/AppClass';
import TextInputEX from './src/TextInputEX';
import L31FlatList from './src/L31FlatList';
import L32FlatList from './src/L32FlatList';
import L51Class from './src/L51Class';
import L81Class from './src/L81Class';
export default function App() {
  return (
    <View style={styles.container}>
      <L81Class/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
