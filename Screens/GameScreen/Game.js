import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import AddIcon from '@mui/icons-material/Add';
import Ionicons from '@expo/vector-icons/Ionicons'

const Game = () => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: '#ffff', height: '100%' }}>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Image source={require('../assets/Screenshot.png')} />
      </View>
    </SafeAreaView>
  )
}

export default Game

const styles = StyleSheet.create({})