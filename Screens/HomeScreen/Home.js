import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    tag: "Relationship",
    text: "want to I love you to my wife and kids "
  },
  {
    tag: "Finance",
    text: "Every day I should call my mom this week and talk to ger for 15mins at least month"
  },
  {
    tag: "Finance",
    text: "I want to save 10% of my earnings starting this month."
  }
]

const Home = () => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <SafeAreaView style={{backgroundColor:'#ffff',height:'100%'}}>
      <Text style={{ fontSize: 26, fontWeight: '400', marginLeft: 16, marginBottom: 10 }}>Suggestion</Text>
      {data.map((item) => (
        <View key={item.tag} style={{ height: 81, padding: 25, backgroundColor: '#DEF6FB', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#00D3FF', padding: 4,borderBottomLeftRadius:5 }}>
          <Text style={{ fontSize: 16}}>{item.tag}</Text>
          </View>
          <Text style={{ fontSize: 16 }}>
            {item.text}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
