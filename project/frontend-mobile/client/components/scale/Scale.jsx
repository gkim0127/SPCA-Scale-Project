import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet, Modal } from "react-native";

const Scale = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-white-bg h-screen">
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
            <Text className="text-primary-blue font-sourceSemiBold text-[50px] text-center mt-20">
                Mocha
            </Text>
            <Text className="text-primary-blue font-sourceSemiBold text-center text-3xl mt-20">
                13.0 KG
            </Text>
            <Text className="text-3xl text-center mt-auto">૮ ・ﻌ・ა</Text>
            <View className="bg-primary-blue border-4 h-5 border-primary-blue rounded-xl mx-14"></View>
            <View className="bg-primary-blue border-4 w-6 h-24 border-primary-blue rounded-b-xl rounded-br-xl mx-auto"></View>

            <View className="flex-row justify-evenly mt-10">
                <Pressable className="bg-primary-blue rounded-xl px-7 py-3 mb-5 w-[35vw]">
                    <Text className="text-center text-white font-source">
                        Zero Scale
                    </Text>
                </Pressable>
                <Pressable className="bg-primary-blue rounded-xl px-7 py-3 mb-5 w-[35vw]">
                    <Text className="text-center text-white font-source">
                        Start
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
export default Scale;
