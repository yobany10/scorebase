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
    const [quizData, setQuizData] = useState('')
    const [quizID, setQuizID] = useState('')
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        db.collection('quizzes').add({
            q1: {
                question: 1,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q2: {
                question: 2,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q3: {
                question: 3,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q4: {
                question: 4,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q5: {
                question: 5,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q6: {
                question: 6,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q7: {
                question: 7,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q8: {
                question: 8,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q9: {
                question: 9,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q10: {
                question: 10,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q11: {
                question: 11,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q12: {
                question: 12,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q13: {
                question: 13,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q14: {
                question: 14,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q15: {
                question: 15,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q16: {
                question: 16,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q17: {
                question: 17,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q18: {
                question: 18,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q19: {
                question: 19,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            q20: {
                question: 20,
                rscore: 10,
                yscore: 10,
                r1: 0,
                r2: 0,
                r3: 0,
                r4: 0,
                r5: 0,
                y1: 0,
                y2: 0,
                y3: 0,
                y4: 0,
                y5: 0
            },
            date: new Date()
        })
        .then((docRef) => {
            setQuizID(docRef.id)
            return docRef
        })
        .then((docRef) => {
            console.log(docRef.id)
        })
    }, [])

    useEffect(() => {
        if (quizID != '') {
            db.collection('quizzes').doc(quizID).get()
            .then((docRef) => {
                setQuizData(docRef.data())
                console.log(`Setting quiz data to:`, docRef.data())
            })
        }
    }, [quizID])

    const renderScoreTable = () => {
        if (quizData != '') {
            let quizDataArr = Object.values(quizData)
            console.log(quizDataArr.sort())
            return quizDataArr.map((item) => {
                return <tr>
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
                        </tr>
            })
        }
        return (<tr>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>10</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>)
      }
    
    const handleQuizzerAction = value => {
        if(value === 'R1-C') {
            setRedScore(redScore + questionValue(question))
            setQuestion(q => q + 1)
            db.collection("quizzes").doc(quizID).update({
                "q1.r1": (questionValue(question))
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