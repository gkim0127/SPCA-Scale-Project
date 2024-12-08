import React from "react"
import { UserList } from "../../../components"
const Users = () => {
    const dummyData = [
        {
            id: 1,
            name: "Lee-Ji-Eun",
            description:
                "Max is a loyal German Shepherd. He loves to play catch and go for runs. He is protective of his family and will always be by their side.",
        },
        {
            id: 2,
            name: "Yvonne",
            description:
                "Bella is a playful Labrador Retriever. She loves to swim and chase after tennis balls. She is great with children and loves to snuggle.",
        },
        {
            id: 3,
            name: "Brendan",
            description:
                "Charlie is a friendly Beagle. He loves to sniff around and go on walks. He is always eager to please and loves to make new friends.",
        },
    ]

    return <UserList userList={dummyData} />
}

export default Users
