import React from 'react'
import ListCard from '../components/ListCard'
import LongPill from '../components/buttons/LongPill'
import BackArrowButton from '../components/buttons/BackArrowButton'

const AllDogsPage = () => {
    return (
        <React.Fragment>
            <div className='h-[90vh] flex flex-col'>
            <BackArrowButton />
                <DogList />
                <div className="mx-20 mt-7">
                    <LongPill buttonName={'Add Dog'} />
                </div>
            </div>
        </React.Fragment>
    )
}

function DogList() {
    return (
        <div className="h-[70vh] overflow-auto">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
        </div>
    )
}
export default AllDogsPage
