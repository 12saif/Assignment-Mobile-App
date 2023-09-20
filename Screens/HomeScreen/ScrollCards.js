import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";

const ScrollCards = () => {
    return (
        <View>
            <ImageBackground
                source={require("./assets/435841.png")}
                style={{
                    flex: 1,
                    width: 350,
                    height: 200,
                    resizeMode: "cover",
                    marginHorizontal: 20,
                    marginVertical: 5,
                    overflow: "hidden",
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#FF6000"
                }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ width: 180, margin: 10 }}>
                        <ImageBackground
                            source={require("./assets/Rectangle18697.png")}
                            style={{
                                width: 130,
                                resizeMode: "cover",
                                borderRadius: 5,
                            }}>
                            <Text style={{ color: "#fff", marginLeft: 25, paddingBottom: 4 }}>
                                upto 60% OFF
                            </Text>
                        </ImageBackground>
                        <Text style={{ fontSize: 16, paddingVertical: 5 }}>
                            This Festival Season
                        </Text>
                        <Text style={{ fontSize: 25, fontWeight: 900, lineHeight: 30 }}>
                            Get Solution from Our{" "}
                            <Text style={{ fontSize: 25, fontWeight: 900, color: "#FF6000", lineHeight: 30 }}>
                                Top Astrologer
                            </Text>
                        </Text>
                        <TouchableOpacity style={{ backgroundColor: '#FF6000', width: 120, marginTop: 10, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff', fontWeight: 600, fontSize: 18, paddingVertical: 10, paddingHorizontal: 10, }} >{`Avail Now >`} </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ position: "absolute", right: 10, }}>
                        <Image
                            source={require("./assets/31.png")}
                            style={{
                                // resizeMode: "cover",
                                width: 140,
                                height: 200,
                            }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default ScrollCards;
