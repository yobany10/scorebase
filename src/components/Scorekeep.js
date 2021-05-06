import React, { useState } from 'react'
import ScoreTable from './ScoreTable'
import ScoreBar from './ScoreBar'
import QuestionBar from './QuestionBar'
import {db} from '../firebase'

const Scorekeep = () => {
    const [redScore, setRedScore] = useState(10)
    const [yellowScore, setYellowScore] = useState(10)
    const [question, setQuestion] = useState(1)

    let scoreTableData = new Map()
    for(let i = 1; i <=20; i++) {
        scoreTableData.set(i, `test: ${i}`)
    }

    const renderScoreTable = () => {
        for(const x of scoreTableData) {
          return <tr>
            <td>{x[0]}</td>
            <td>{x[1]}</td>
          </tr>
        }
      }

    const handleRedPlus = event => {
        setRedScore(redScore + questionValue(question))
        setQuestion(q => q + 1)
    }

    const handleYellowPlus = event => {
        setYellowScore(yellowScore + questionValue(question))
        setQuestion(q => q + 1)
    }

    const handleRedMinus = event => {
        setRedScore(redScore - (questionValue(question) / 2))
        setQuestion(q => q + 1)
    }

    const handleYellowMinus = event => {
        setYellowScore(yellowScore - (questionValue(question) / 2))
        setQuestion(q => q + 1)
    }

    const handleQuizClose = () => {
        db.collection("quizzes").add({
            coach1First: "Yobany",
            coach1Last: "Perez",
            coach2First: "Tania",
            coach2Last: "Perez",
            red1First: "Rolando",
            red1Last: "Baltazar",
            red2First: "Samuel",
            red2Last: "Vazquez",
            red3First: "Kassy",
            red3Last: "Vazquez",
            churchName: "Los Pentecostales de Charlotte",
            born: 1996,
            date: new Date()
        })
        .then((docRef) => {
            console.log("Success!");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
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
            <button onClick={handleQuizClose}>Close Quiz</button>
            <ScoreTable redScore={redScore} yellowScore={yellowScore} scoreTableData={scoreTableData} render={renderScoreTable()} />
        </div>
    )
}

export default Scorekeep