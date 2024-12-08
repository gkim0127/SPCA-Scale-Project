import { Stack, useSearchParams } from "expo-router"
import React, { useEffect, useState } from "react"
import { Text } from "react-native"
import { DogDetailsCard } from "../../../components"

const DogDetails = () => {
    const [dogData, setDogData] = useState(null)
    const { id } = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)

    const dummyData = [
        {
            id: 1,
            name: "Max",
            description:
                "Max is a loyal German Shepherd. He loves to play catch and go for runs. He is protective of his family and will always be by their side.",
        },
        {
            id: 2,
            name: "Bella",
            description:
                "Bella is a playful Labrador Retriever. She loves to swim and chase after tennis balls. She is great with children and loves to snuggle.",
        },
        {
            id: 3,
            name: "Charlie",
            description:
                "Charlie is a friendly Beagle. He loves to sniff around and go on walks. He is always eager to please and loves to make new friends.",
        },
    ]

    // change into api call from backend

    // useEffect(() => {
    // console.log(id)
    // const dogDataAPI = dummyData.find((dog) => dog.id == id)
    // setDogData(dogDataAPI)
    // setIsLoading(false)

    // }, [])

    const dogDataAPI = dummyData.find((dog) => dog.id == id)
    console.log(dogDataAPI)

    {
        if (!isLoading) {
            return <Text>Loading...</Text>
        } else {
            return <DogDetailsCard />
        }
    }
}

export default DogDetails
