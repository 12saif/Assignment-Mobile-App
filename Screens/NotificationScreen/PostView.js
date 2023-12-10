import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const PostView = () => {
    return (
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
            <Image source={require('../assets/image108.png')} />
            <Text style={{ fontSize: 28, fontWeight: 600, textAlign: 'center', marginVertical: 25 }}>Is there possibility of flying cars in future ?</Text>
            <View style={{ backgroundColor: '#FFD7B5', height: 70, width: 350, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 400, textAlign: 'center', marginVertical: 10 }}>Yes, science is working on it</Text>
            </View>
            <View style={{ backgroundColor: '#FFD7B5', height: 70, width: 350, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 400, textAlign: 'center', marginVertical: 10 }}>Will come in 2023</Text>
            </View>
            <View style={{ borderColor: '#FFD7B5', borderWidth: 1, height: 70, width: 350, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 400, textAlign: 'center', marginVertical: 10 }}>Not at all possible</Text>
            </View >
            <TouchableOpacity style={{ backgroundColor: '#CC640B', alignItems: 'center', marginVertical: 60, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 23 }}>
                <Text style={{ color: '#ffff' }}>Save</Text>
            </TouchableOpacity>
        </View >
    )
}

export default PostView

const styles = StyleSheet.create({})