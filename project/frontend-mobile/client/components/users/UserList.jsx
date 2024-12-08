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
import UserListCard from "./UserListCard"
import { useRouter } from "expo-router"
import DropdownButton from "../dropdown/DropdownButton"

const UserList = ({ userList }) => {
    const [text, onChangeText] = useState("")
    const [selectedOption, setSelectedOption] = useState({
        label: "Users",
        value: "user",
    })
    const [selectedOptionLabel, setSelectedOptionLabel] = useState("Users")

    const handleOptionSelect = (option) => {
        setSelectedOptionLabel(option.label)
        routerToPage(option.value)
    }

    const router = useRouter()

    const routerToPage = (optionValue) => {
        if (optionValue === "dogs") {
            router.push("/home/dogs")
        } else if (optionValue === "locations") {
            router.push("/home/locations")
        } else {
            router.push("/home/users")
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
                            { label: "Dogs", value: "dogs" },
                            { label: "Locations", value: "locations" },
                        ]}
                        selectedOption={selectedOption}
                        onSelect={handleOptionSelect}
                    />
                    <Pressable
                        onPress={() => {
                            router.push(`/home/users/addUser`)
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
                    {userList.map((users) => {
                        return <UserListCard users={users} key={users.id} />
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default UserList
