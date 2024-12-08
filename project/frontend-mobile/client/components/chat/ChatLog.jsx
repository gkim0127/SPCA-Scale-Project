import { useSearchParams } from "expo-router"
import React from "react"
import { SafeAreaView, View, Text, TextInput, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const ChatLog = () => {
    const { id } = useSearchParams()
    return (
        <SafeAreaView style={{ flex: 1 }} className="h-screen bg-white-bg">
            <View className="flex-row mt-10">
                <View className="rounded-full bg-primary-blue h-16 w-16 ml-5"></View>
                <View className="my-auto ml-8">
                    <Text className="font-sourceSemiBold text-3xl">
                        Harry Smith
                    </Text>
                    <Text className="font-source text-lg ml-1">Auckland</Text>
                </View>
            </View>
            <View className="border-primary-blue h-1 border-2 bg-primary-blue mt-6"></View>

            <View className="h-[68vh]">{/* input chat here */}</View>
            <View className="flex-row">
                <TextInput
                    className="font-source border border-primary-blue rounded-xl py-1 px-3 bg-white mb-4 mt-4 ml-5 mr-14 my-auto w-[80vw]"
                    placeholder="Message..."
                />
                <Pressable className="ml-auto mr-3 my-auto">
                    <Ionicons name="send" size={24} color="#006DAA" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default ChatLog
