import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av'

const OnBoarding = () => {
    const navigation = useNavigation();

    const OnPressHome = () => {
        navigation.navigate('Home')
    }

    const AUDSound = require('../Aud/Sound.mp3');

    handlePlaySound = async () => {
        const soundObj = new Audio.Sound();
        try {
            let source = AUDSound;
            await soundObj.loadAsync(source);
            await soundObj.playAsync().then(async playbackStatus => {
                setTimeout(() => {
                    soundObj.unloadAsync();
                }, playbackStatus.playableDurationMillis);
            }).catch(error => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#ffff', height: '100%' }}>
            <View style={{ alignItems: 'center', marginVertical: 10, justifyContent: 'space-evenly' }}>
                <Image source={require('../assets/Screenshot.png')} />
                <Text style={{ fontSize: 25, textAlign: 'center', marginVertical: 20 }}>Begin your fun journey with a random surprise</Text>
                <TouchableOpacity style={{ marginTop: 40, backgroundColor: '#FF7F11', paddingVertical: 5, paddingHorizontal: 6, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name='add' size={30} color='#ffff' />
                </TouchableOpacity>
                <View style={{ position: 'relative', bottom: -30 }}>
                    <TouchableOpacity onPress={() => { handlePlaySound(); OnPressHome(); }} style={{ backgroundColor: '#FF7F11', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#ffff', fontSize: 14, fontWeight: 600 }}>Start Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({})