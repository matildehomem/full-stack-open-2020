import React from 'react'

export default function Total({parts}) {

    const total = parts.reduce((prev, cur) => prev + cur.exercises, 0)
    
    return (
        <p>total of {total} exercises </p>
    )
}
