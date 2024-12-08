import React from "react"
import { View, Text, Pressable, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const LocationListCard = ({ locations }) => {
    const router = useRouter()
    return (
        <View className="border-primary-blue border-2 p-3 mb-2 rounded-md mx-5">
            <View className="flex-row justify-between">
                <Text className="font-sourceSemiBold text-primary-blue text-xl">
                    {locations.name}
                </Text>
                <View className="flex-row space-x-2">
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name="pencil"
                            size={24}
                            color="#006DAA"
                        />
                    </TouchableOpacity>
                    <Pressable className="bg-primary-blue rounded-xl px-4 py-1">
                        <Text className="font-source text-white text-center">
                            View
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View className="flex-row space-x-2">
                <Text className="font-source text-primary-blue">
                    1234 Street, Auckland
                </Text>
            </View>
        </View>
    )
}

export default LocationListCard
