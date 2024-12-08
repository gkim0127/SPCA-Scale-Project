import React from "react"
import { LocationList } from "../../../components"

const Locations = () => {
    const dummyData = [
        {
            id: 1,
            name: "Christchurch",
            description:
                "Max is a loyal German Shepherd. He loves to play catch and go for runs. He is protective of his family and will always be by their side.",
        },
        {
            id: 2,
            name: "Wellington",
            description:
                "Bella is a playful Labrador Retriever. She loves to swim and chase after tennis balls. She is great with children and loves to snuggle.",
        },
        {
            id: 3,
            name: "Auckland",
            description:
                "Charlie is a friendly Beagle. He loves to sniff around and go on walks. He is always eager to please and loves to make new friends.",
        },
    ]

    return <LocationList locationList={dummyData} />
}

export default Locations
