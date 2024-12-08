import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

const DropdownButton = ({ options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionSelect = (option) => {
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <View className="relative z-50">
            <TouchableOpacity
                onPress={toggleDropdown}
                className="flex-row items-center"
            >
                <Text className="text-2xl mr-2">{selectedOption.label}</Text>
                <Text className="text-gray-500 text-xl">▼</Text>
            </TouchableOpacity>
            {isOpen && (
                <View className="absolute top-full top-0 bg-white z-50 pointer-events-auto">
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option.value}
                            onPress={() => handleOptionSelect(option)}
                            className="py-2 px-4 bg-blue-500 w-24 "
                        >
                            <Text>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
}

export default DropdownButton
