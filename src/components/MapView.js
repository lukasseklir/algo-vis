import React from 'react'
import MapNode from './MapNode'
import './MapView.css';

// Represents a 10 x 18 grid of grid squares

export default function MapView(props) {

    const grid = []
    for (let row = 0; row < 18; row ++) {
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<MapNode key={`${col}${row}`} color='blue' />)
        }
    }

    return (
        <div className='map-view'>
            {grid}
        </div>
    )
}