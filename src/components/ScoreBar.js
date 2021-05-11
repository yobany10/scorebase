import React from 'react'
import './ScoreBar.css'

const ScoreBar = props => {
    return (
        <div className='scorebar-div'>
            <h1 className='scorebar-score'>{props.rScore}</h1>
            <p className='scorebar-team'>Red Team</p>
            <h1 className='scorebar-score'>{props.yScore}</h1>
            <p className='scorebar-team'>Yellow Team</p>
        </div>
    )
}

export default ScoreBar