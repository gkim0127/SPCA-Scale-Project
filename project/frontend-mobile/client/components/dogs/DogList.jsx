import React, { useState } from "react"
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import DogListCard from "./DogListCard"
import { useRouter } from "expo-router"
import DropdownButton from "../dropdown/DropdownButton"

const DogList = ({ dogList }) => {
    const [text, onChangeText] = useState("")
    const [selectedOption, setSelectedOption] = useState({
        label: "Dogs",
        value: "dogs",
    })
    const [selectedOptionLabel, setSelectedOptionLabel] = useState("Dogs")

    const handleOptionSelect = (option) => {
        setSelectedOptionLabel(option.label)
        routerToPage(option.value)
    }

    const router = useRouter()

    const routerToPage = (optionValue) => {
        if (optionValue === "locations") {
            router.push("/home/locations")
        } else if (optionValue === "users") {
            router.push("/home/users")
        } else {
            router.push("/home/dogs")
        }
    }

    return (
        <SafeAreaView className="bg-white-bg h-screen" style={{ flex: 1 }}>
            <StatusBar style="auto" translucent />
            <View className="h-full mt-10 mx-5">
                <View className="flex-row justify-between items-center">
                    <DropdownButton
                        className="font-sourceSemiBold text-3xl text-dark-blue"
                        options={[
                            { label: "Locations", value: "locations" },
                            { label: "Users", value: "users" },
                        ]}
                        selectedOption={selectedOption}
                        onSelect={handleOptionSelect}
                    />
                    <Pressable
                        onPress={() => {
                            router.push(`/home/dogs/addDogs`)
                        }}
                    >
                        <Text className="text-primary-blue text-[50px] font-sourceBold">
                            +
                        </Text>
                    </Pressable>
                </View>
                <TextInput
                    className="font-source border border-primary-blue rounded-xl py-1 px-3 bg-white mb-4"
                    placeholder="Search"
                    onChangeText={onChangeText}
                    value={text}
                />
                <ScrollView className="mb-12 -mx-5">
                    {/* an array of dogs passing in unique dog json */}
                    {dogList.map((dog) => {
                        return <DogListCard dog={dog} key={dog.id} />
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default DogList
