import React from 'react'

const LongPill = ({ buttonName }) => {
    return (
        <button type="button" className="my-2 w-full rounded-2xl bg-primary-blue p-3 font-source text-3xl font-bold tracking-wide text-white text-center">
            {buttonName}
        </button>
    )
}

export default LongPill
