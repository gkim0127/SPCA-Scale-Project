import React from "react"
import { Tabs } from "expo-router"
import { Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Layout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }} initialRouteName="dogs">
            <Tabs.Screen
                name="messages"
                options={{
                    title: () => (
                        <Text className="font-source text-primary-blue">
                            Message
                        </Text>
                    ),
                    tabBarIcon: () => (
                        <MaterialCommunityIcons
                            name="message"
                            size={24}
                            color="#006DAA"
                        />
                    ),
                    title: () => <Text className="font-source text-primary-blue">Messages</Text>,
                    tabBarIcon: () => <MaterialCommunityIcons name="message" size={24} color="#006DAA" />,
                }}
            />
            <Tabs.Screen
                name="dogs"
                options={{
                    title: () => (
                        <Text className="font-source text-primary-blue">
                            Home
                        </Text>
                    ),
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color="#006DAA" />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: () => (
                        <Text className="font-source text-primary-blue">
                            Profile
                        </Text>
                    ),
                    tabBarIcon: () => (
                        <Ionicons
                            name="person-circle-outline"
                            size={24}
                            color="#006DAA"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="locations"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="users"
                options={{
                    href: null,
                }}
            />
        </Tabs>
    )
}

export default Layout
