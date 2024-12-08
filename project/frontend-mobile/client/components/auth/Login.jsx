import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Text, View, TextInput, SafeAreaView, Button, Pressable } from 'react-native'
import { Link, useRouter } from 'expo-router'

const Login = () => {
    const [text, onChangeText] = useState('')
    const router = useRouter()
    return (
        <SafeAreaView className="bg-white-bg h-screen" style={{flex: 1}}>
            <StatusBar style="auto" translucent/>
            <View className="h-full justify-evenly">
                <Text className="font-sourceBold text-primary-blue text-[56px] text-center">SPCA</Text>

                <View className="flex-col mx-7">
                    <Text className="font-source text-primary-blue mb-2">Email</Text>
                    <TextInput
                        className="font-source border border-primary-blue rounded-xl p-3 bg-white"
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Email address"
                    />
                </View>

                <View className="flex-col mx-7">
                    <Text className="font-source text-primary-blue mb-2">Password</Text>
                    <TextInput
                        className="font-source border border-primary-blue rounded-xl p-3 bg-white"
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Password"
                    />
                </View>

                <Pressable
                    className="bg-primary-blue mx-7 rounded-xl p-2 mt-8"
                    onPress={() => {
                        router.push(`home`)
                    }}
                >
                    <Text className="font-sourceSemiBold text-2xl text-white text-center">Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login
