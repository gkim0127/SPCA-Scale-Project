import React from "react"
import {
    View,
    ScrollView,
    SafeAreaView,
    Text,
    Pressable,
    ImageBackground,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import ChartCard from "../chart/ChartCard"

const DogDetailsCard = ({ dogDetails }) => {
    const router = useRouter()
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-white h-screen">
            <ImageBackground
                source={{ uri: "https://placedog.net/400" }}
                className="h-[30vh] z-10"
            />
            <ScrollView
                className="-mt-5 pt-10 pb-10 space-y-5 rounded-t-3xl rounded-r-3xl px-5 bg-white z-20"
                style={{ flex: 1 }}
            >
                <View className="flex-row">
                    <Text className="text-primary-blue font-sourceSemiBold text-3xl mx-auto">
                        Mocha
                    </Text>
                </View>
                <View className="flex-row">
                    <Text className="text-2xl font-sourceSemiBold">
                        Breed:{" "}
                    </Text>
                    <Text className="text-2xl font-source">Yes</Text>
                </View>
                <View className="flex-row">
                    <Text className="text-2xl font-sourceSemiBold">Age: </Text>
                    <Text className="text-2xl font-source">Yes</Text>
                </View>
                <View className="flex-row">
                    <Text className="text-2xl font-sourceSemiBold">
                        Weight:{" "}
                    </Text>
                    <Text className="text-2xl font-source">Yes</Text>
                </View>
                <View className="flex-row flex-wrap">
                    <Text className="text-2xl font-sourceSemiBold">
                        Description:{" "}
                    </Text>
                    <Text className="text-2xl font-source">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sodales ut eu sem integer vitae justo eget
                        magna fermentum. Eu ultrices vitae auctor eu augue ut
                        lectus arcu. Mauris cursus mattis molestie a iaculis at
                        erat pellentesque adipiscing.
                    </Text>
                </View>
                <View className="flex bg-white rounded-lg mr-10">
                    <ChartCard />
                </View>
                <Pressable
                    className="bg-primary-blue rounded-xl px-4 py-2 mb-16"
                    onPress={() => {
                        router.push(`/home/dogs/weigh`)
                    }}
                >
                    <Text className="font-source text-white text-xl text-center">
                        Record New Weight
                    </Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DogDetailsCard
