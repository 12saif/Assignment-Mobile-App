import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'

const ScrollCards = () => {
    return (
        <View>
            <ImageBackground
                source={require("./assets/43584 1.png")}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    marginHorizontal: 20,
                    marginVertical: 5,
                    overflow: 'hidden'
                }}>
                <View style={{ alignItems: "center" }}>
                    <View
                        style={{
                        }}>
                        <Image
                            source={require("./assets/31.png")}
                            style={{
                                resizeMode: "cover",
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                </View>
                </ImageBackground>
        </View>
    )
}

export default ScrollCards