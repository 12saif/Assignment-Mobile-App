import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const Game = () => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor:'#ffff',height:'100%'}}>
      <Text>Game</Text>
    </SafeAreaView>
  )
}

export default Game

const styles = StyleSheet.create({})