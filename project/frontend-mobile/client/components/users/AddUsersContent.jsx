import React from "react"
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"

const AddUserContent = () => {
    const router = useRouter()
    return (
        <SafeAreaView className="bg-white-bg h-screen" style={{ flex: 1 }}>
            <StatusBar style="auto" translucent />
            <View className="h-full pt-10 mx-5 justify-evenly">
                <View className="flex-row items-center">
                    <Text className="font-sourceSemiBold text-3xl text-primary-blue">
                        Add User
                    </Text>
                </View>
                <View className="justify-between h-[70vh]">
                    <View className="flex-row">
                        <Text className="w-24 font-sourceBold mr-10 mt-2.5">
                            Username:
                        </Text>
                        <TextInput className="flex-1 border border-gray-300 p-2 rounded-lg" />
                    </View>
                    <View className="flex-row">
                        <Text className="w-24 font-sourceBold mr-10 mt-2.5">
                            Password:
                        </Text>
                        <TextInput className="flex-1 border border-gray-300 p-2 rounded-lg" />
                    </View>
                    <View className="flex-row">
                        <Text className="w-24 font-sourceBold mr-10 mt-2.5">
                            Name:
                        </Text>
                        <TextInput className="flex-1 border border-gray-300 p-2 rounded-lg" />
                    </View>
                    <View className="flex-row">
                        <Text className="w-24 font-sourceBold mr-10 mt-2.5">
                            Role:
                        </Text>
                        <TextInput className="flex-1 border border-gray-300 p-2 rounded-lg" />
                    </View>
                    <View className="flex-row">
                        <Text className="w-24 font-sourceBold mr-10 mt-2.5">
                            Location:
                        </Text>
                        <TextInput
                            className="flex-1 border border-gray-300 p-2 rounded-lg "
                            multiline={true}
                            textAlignVertical="top"
                        />
                    </View>
                    <Pressable
                        className="bg-primary-blue mx-7 rounded-xl p-2"
                        onPress={() => {
                            router.replace("/home")
                        }}
                    >
                        <Text className="font-sourceSemiBold text-2xl text-white text-center">
                            Submit
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AddUserContent