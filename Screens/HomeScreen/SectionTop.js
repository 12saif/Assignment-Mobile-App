import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

const SectionTop = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("./assets/Layer1.jpg")}
                style={{
                    flex: 1,
                    resizeMode: "cover",
                    borderWidth: 0.5,
                    borderColor: "gray",
                    marginHorizontal: 20,
                    marginVertical: 5,
                    borderRadius: 10,
                    padding: 10,
                    overflow: 'hidden'
                }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View style={{ alignItems: "center" }}>
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 80,
                                borderWidth: 1,
                                borderColor: "#FF6000",
                            }}>
                            <Image
                                source={require("./assets/E-Pooja.png")}
                                style={{
                                    resizeMode: "cover",
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}>Online Puja</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 80,
                                borderWidth: 1,
                                borderColor: "#FF6000",
                            }}>
                            <Image
                                source={require("./assets/E-Pooja.png")}
                                style={{
                                    resizeMode: "cover",
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}>Ask Question</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 80,
                                borderWidth: 1,
                                borderColor: "#FF6000",
                            }}>
                            <Image
                                source={require("./assets/E-Pooja.png")}
                                style={{
                                    resizeMode: "cover",
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}>Free Kundli</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View
                            style={{
                                padding: 15,
                                borderRadius: 80,
                                borderWidth: 1,
                                borderColor: "#FF6000",
                            }}>
                            <Image
                                source={require("./assets/E-Pooja.png")}
                                style={{
                                    resizeMode: "cover",
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 16 }}>Astroverse</Text>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
};

export default SectionTop;
