import React from "react"
import { View, Text, Pressable, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const UserListCard = ({ users }) => {
    const router = useRouter()
    return (
        <View className="border-primary-blue border-2 p-3 mb-2 rounded-md mx-5">
            <View className="flex-row justify-between">
                <Text className="font-sourceSemiBold text-primary-blue text-xl">
                    {users.name}
                </Text>
                <View className="flex-row space-x-2">
                    <TouchableOpacity
                        onPress={() => {
                            router.push(`/home/dogs/editDogs`)
                        }}
                    >
                        <MaterialCommunityIcons
                            name="pencil"
                            size={24}
                            color="#006DAA"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-row space-x-2">
                <Text className="font-source text-primary-blue">
                    Vet, Auckland Branch
                </Text>
            </View>
        </View>
    )
}

export default UserListCard
