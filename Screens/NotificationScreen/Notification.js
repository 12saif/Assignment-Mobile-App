import { StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor:'#ffff',height:'100%'}}>
      <View>
      <Text>Notification</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})