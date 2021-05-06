import React from 'react'
import './QuestionBar.css'

const QuestionBar = props => {
    return (
        <div className='questionbar-div'>
            <h1>Question: {props.question}</h1>
        </div>
    )
}

export default QuestionBar