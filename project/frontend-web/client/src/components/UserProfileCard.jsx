import React from 'react'

const UserProfileCard = () => {
    return (
        <React.Fragment>
            <div className="flex flex-row">
                <div className='rounded-full bg-primary-blue w-48 h-48 mr-10'></div>
                <div className="flex flex-col space-y-4 mt-4">
                    <h2 className="font-source text-5xl font-bold text-primary-blue">Lee Ji-eun</h2>
                    <p className="font-source text-2xl font-normal text-primary-blue">Occupation: Vet</p>
                    <p className="font-source text-2xl font-normal text-primary-blue">Location: Auckland</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserProfileCard
