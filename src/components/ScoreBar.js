import React from 'react'

const ScoreBar = props => {
    return (
        <div className='scorebar-div'>
            <h1 className='scorebar-score'>{props.score}</h1>
            <p className='scorebar-team'>{props.team}</p>
        </div>
    )
}

export default ScoreBar