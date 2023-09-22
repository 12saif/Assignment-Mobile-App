import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";

const OurPremiumService = () => {
    return (
        <View style={{ width: 350, marginHorizontal: 20, marginBottom: 50 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 20,
                }}>
                <Image
                    source={require("./assets/Line2.png")}
                    style={{ resizeMode: "cover", width: 100, marginRight: 10 }}
                />
                <Text style={{ textTransform: "uppercase", color: "#79899C" }}>
                    Our Premium Service
                </Text>
                <Image
                    source={require("./assets/Line2.png")}
                    style={{ resizeMode: "cover", width: 100, marginLeft: 10 }}
                />
            </View>
            <ImageBackground
                source={require("./assets/Layer1.jpg")}
                style={{
                    flex: 1,
                    width: 350,
                    height: 200,
                    resizeMode: "center",
                    overflow: "hidden",
                    borderWidth: 2,
                    padding: 5,
                    borderRadius: 10,
                    borderColor: "#7E89F4",
                }}>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderRadius: 10,
                        borderColor: "#7E89F4",
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                        }}>
                        <Image
                            source={require("./assets/p-133771.png")}
                            style={{ resizeMode: "cover", height: 45, width: 45 }}
                        />
                        <Image
                            source={require("./assets/GaneshaJi.png")}
                            style={{ resizeMode: "cover", height: 40, width: 40 }}
                        />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: 50,
                        }}>
                        <Text
                            style={{
                                width: 290,
                                fontSize: 33,
                                lineHeight: 40,
                                fontWeight: 500,
                                color: "#39439E",
                                textAlign: "center",
                            }}>
                            One click to talk to{" "}
                            <Text style={{ fontWeight: 900 }}>premium</Text> astrologers!
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <TouchableOpacity
                style={{
                    width: 320,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FF6000",
                    borderRadius: 30,
                    position: 'absolute',
                    bottom: -18,
                    left: 15
                }}>
                <Image
                    source={require("./assets/AnglesmallArrow.png")}
                    style={{
                        resizeMode: "cover",
                        height: 55,
                        width: 55,
                        marginLeft: 2,
                        marginVertical: 2,
                    }}
                />
                <Text style={{ fontSize: 22, color: '#FFFFFF', marginLeft: 45 }}>Swipe to talk now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OurPremiumService;
