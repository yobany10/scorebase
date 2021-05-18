import React, { useState, useEffect } from 'react'
import ScoreTable from './ScoreTable'
import ScoreBar from './ScoreBar'
import QuestionBar from './QuestionBar'
import TimeBar from './Time'
import {db} from '../firebase'

import './Scorekeep.css'

const Scorekeep = () => {
    const [redScore, setRedScore] = useState(10)
    const [yellowScore, setYellowScore] = useState(10)
    const [question, setQuestion] = useState(1)
    const [quizData, setQuizData] = useState([])
    const [quizID, setQuizID] = useState('')
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        db.collection('quizzes').add({
            date: new Date()
        })
        .then((docRef) => {
            console.log(docRef.id)
            setQuizID(docRef.id)
        })
    }, [])

    let obj = [
        {
            question: 1,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 2,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 3,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 4,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 5,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 6,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 7,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 8,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 9,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 10,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 11,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 12,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 13,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 14,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 15,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 16,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 17,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 18,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 19,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        },{
            question: 20,
            rscore: `${redScore}`,
            yscore: `${yellowScore}`,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            y1: 0,
            y2: 0,
            y3: 0,
            y4: 0,
            y5: 0,
        }
    ]

    const renderScoreTable = () => {
        return obj.map((item) => {
          return (<tr>
            <td>{item.question}</td>
            <td>{item.r1}</td>
            <td>{item.r2}</td>
            <td>{item.r3}</td>
            <td>{item.r4}</td>
            <td>{item.r5}</td>
            <td>{item.rscore}</td>
            <td>{item.yscore}</td>
            <td>{item.y1}</td>
            <td>{item.y2}</td>
            <td>{item.y3}</td>
            <td>{item.y4}</td>
            <td>{item.y5}</td>
          </tr>)
        })
      }
    
    const handleQuizzerAction = value => {
        if(value === 'R1-C') {
            setRedScore(redScore + questionValue(question))
            setQuestion(q => q + 1)
            db.collection("quizzes").doc(quizID).collection('quizTable').doc(`question${question}`).set({
                question: question,
                    rscore: redScore,
                    yscore: yellowScore,
                    r1: 0,
                    r2: 0,
                    r3: 0,
                    r4: 0,
                    r5: 0,
                    y1: 0,
                    y2: 0,
                    y3: 0,
                    y4: 0,
                    y5: 0,
            })
            .then((docRef) => {
                console.log(`Success!`)
            })
        }
    }

    const handleRcorrect = event => {
        setRedScore(redScore + questionValue(question))
        setQuestion(q => q + 1)
        db.collection("quizzes").doc(quizID).collection('quizTable').doc(`question${question}`).set({
            question: question,
                rscore: redScore,
                yscore: yellowScore,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0,
        })
        .then((docRef) => {
            console.log(`Success!`)
        })
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

    useEffect(() => {
        const interval = setInterval(() => {
            currentTime <= 0 ? clearInterval(interval) : setCurrentTime(currentTime - 1)
        }, 1000)
        return () => clearInterval(interval)
    },[currentTime])

    const handleClear = () => {
        setCurrentTime(0)
    }

    const handle5 = () => {
        setCurrentTime(5)
    }

    const handle30 = () => {
        setCurrentTime(30)
    }
    
    const handle60 = () => {
        setCurrentTime(60)
    }

    // const handleQuizClose = () => {
    //     db.collection("quizzes").add({
    //         quizTable: [
    //             {
    //                 question: question,
    //                 rscore: redScore,
    //                 yscore: yellowScore,
    //                 r1: 0,
    //                 r2: 0,
    //                 r3: 0,
    //                 r4: 0,
    //                 r5: 0,
    //                 y1: 0,
    //                 y2: 0,
    //                 y3: 0,
    //                 y4: 0,
    //                 y5: 0,
    //             }
    //         ],
    //         date: new Date()
    //     })
    //     .then((docRef) => {
    //         setQuizID(docRef.id)
    //         console.log(docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding document: ", error);
    //     });
    // }

    const getData = () => {
        db.collection('quizzes').doc('HCKPznWfzAoC8hEyVvc6').get()
        .then((docRef) => {
            console.log(docRef.data())
        })
    }

    const questionValue = (questionNum) => {
        let value;
        questionNum > 17 ? value = 30 : questionNum <= 17 && questionNum >= 8 ? value = 20 : value = 10
        return value
    }

    return (
        <div className='scorekeep-div'>
            <p className='quiz-id'>Quiz ID: {quizID}</p>
            <ScoreBar rScore={redScore} yScore={yellowScore} handleQuizzerAction={handleQuizzerAction} />
            <QuestionBar question={question} className='question-bar' />
            <TimeBar currentTime={currentTime} handleClear={handleClear} handle5={handle5} handle30={handle30} handle60={handle60}/>
            {/* <button onClick={handleRedPlus}>Red Correct</button>
            <button onClick={handleRedMinus}>Red Incorrect</button>
            <button onClick={handleYellowPlus}>Yellow Correct</button>
            <button onClick={handleYellowMinus}>Yellow Incorrect</button> */}
            {/* <button onClick={handleQuizClose}>Close Quiz</button> */}
            {/* <button onClick={getData}>Get Data</button> */}
            <ScoreTable redScore={redScore} yellowScore={yellowScore} render={renderScoreTable()} className='score-table'/>
        </div>
    )
}

export default Scorekeep