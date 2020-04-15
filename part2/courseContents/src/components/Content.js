import React from 'react'
import Part from './Part'

export default function Content({parts}) {
    return (
        <ul>
            {parts.map(part => <Part key={part.id} part={part} /> )}
        </ul>
    )
}
