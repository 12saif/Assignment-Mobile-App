import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SectionTop from "./SectionTop";
import ScrollCards from "./ScrollCards";
import OurPremiumService from "./OurPremiumService";
import OurService from "./OurService";

const Home = () => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ marginTop: 30 }} >
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FFFFFF' }} >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Alert.alert('This is sidebar', 'On iOS you can specify any number of buttons. Each button can optionally specify a style ')}>
              <Image source={require('./assets/Icon.png')} style={{ width: 30, height: 30, marginRight: 20 }} />
            </TouchableOpacity>
            <Image source={require('./assets/Frame8552.png')} style={{ width: 30, height: 30, marginRight: 5 }} />
            <Text style={{ fontSize: 19, fontWeight: 800 }}>Right</Text>
            <Text style={{ fontSize: 17 }}>Astrology</Text>
          </View>
          <View>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#525FE1', borderRadius: 50, paddingHorizontal: 20, paddingVertical: 10 }} >
              <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Text style={{ marginRight: 15, color: '#FF6000' }} >1,000</Text>
                <Image source={require('./assets/Iconwellet.png')} style={{ width: 30, height: 30 }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <SectionTop />
        <ScrollCards />
        <OurPremiumService />
        <OurService />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
