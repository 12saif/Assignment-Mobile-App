import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import PostView from './PostView';


const data = [
  {
    button: "View",
    text: "You receive a  joy"
  },
  {
    button: "View",
    text: "You receive a  joy"
  },
  {
    button: "View",
    text: "You receive a  joy"
  }
]

const Notification = () => {
  const [modal, setModal] = useState(false)

  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);


  function renderModel() {
    return (
      <Modal visible={modal} animationType="slide" transparent={true} >
        <SafeAreaView style={{ flex: 0, backgroundColor: "#ffff", height: "100%", width: "100%", position: "absolute", bottom: 0 }} >
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View style={{ backgroundColor: "#ffff", padding: 15, flex: 1 }}>
              <TouchableOpacity onPress={() => setModal(false)}>
                <Image source={require("../assets/Vector.png")} style={{ marginTop: 0 }} />
              </TouchableOpacity>
              <View style={{}}>
                <PostView />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#ffff', height: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
        <Image source={require('../assets/Vector.png')} style={{ height: 20, width: 25, paddingRight: 10 }} />
        <Text style={{ fontSize: 26, fontWeight: '400', marginLeft: 16, marginBottom: 10 }}>Notification</Text>
      </View>
      {data.map((item) => (
        <View key={item.tag} style={{ padding: 25, backgroundColor: '#DEF6FB', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10, paddingLeft: 50, paddingRight: 30 }}>
          <Text style={{ fontSize: 16 }}>
            {item.text}
          </Text>
          <TouchableOpacity onPress={() => setModal(true)} style={{ backgroundColor: '#CC640B', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 5 }}>
            <Text style={{ fontSize: 16 }}>{item.button}</Text>
          </TouchableOpacity>
        </View>
      ))}
      {renderModel()}
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})