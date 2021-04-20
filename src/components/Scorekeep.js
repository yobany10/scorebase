import React, { useState } from 'react'
import ScoreTable from './ScoreTable'

const Scorekeep = () => {
    const [redScore, setRedScore] = useState(10)
    const [yellowScore, setYellowScore] = useState(10)

    const handleRedPlus = event => {
        setRedScore(redScore + 10)
    }

    const handleYellowPlus = event => {
        setYellowScore(yellowScore + 10)
    }

    return (
        <div>
            <button onClick={handleRedPlus}>Red Plus</button>
            <button onClick={handleYellowPlus}>Yellow Plus</button>
            <h3>Red team has {redScore} points.</h3>
            <h3>Yellow team has {yellowScore} points.</h3>
            <ScoreTable />
        </div>
    )
}

export default Scorekeep