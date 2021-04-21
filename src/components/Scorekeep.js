import React, { useState, useEffect } from 'react'
import ScoreTable from './ScoreTable'
import ScoreBar from './ScoreBar'
import QuestionBar from './QuestionBar'

const Scorekeep = () => {
    const [redScore, setRedScore] = useState(10)
    const [yellowScore, setYellowScore] = useState(10)
    const [question, setQuestion] = useState(0)

    useEffect( () => {
        setQuestion(question + 1)
    }, [redScore, yellowScore])

    const handleRedPlus = event => {
        setRedScore(redScore + questionValue(question))
    }

    const handleYellowPlus = event => {
        setYellowScore(yellowScore + questionValue(question))
    }

    const handleRedMinus = event => {
        setRedScore(redScore - (questionValue(question) / 2))
    }

    const handleYellowMinus = event => {
        setYellowScore(yellowScore - (questionValue(question) / 2))
    }

    const questionValue = (questionNum) => {
        let value;
        questionNum > 17 ? value = 30 : questionNum <= 17 && questionNum >= 8 ? value = 20 : value = 10
        return value
    }

    return (
        <div>
            <ScoreBar score={redScore} team='Red Team' />
            <ScoreBar score={yellowScore} team='Yellow Team' />
            <QuestionBar question={question} />
            <button onClick={handleRedPlus}>Red Correct</button>
            <button onClick={handleRedMinus}>Red Incorrect</button>
            <button onClick={handleYellowPlus}>Yellow Correct</button>
            <button onClick={handleYellowMinus}>Yellow Incorrect</button>
            <ScoreTable />
        </div>
    )
}

export default Scorekeep