import React from 'react'

import './Time.css'

const Time = props => {
    return (
        <div className='timebar-div'>
            <p className='timebar-time-display'>{props.currentTime}</p>
            <button onClick={props.handle5}>5</button>
            <button onClick={props.handle30}>30</button>
            <button onClick={props.handle60}>60</button>
        </div>
    )
}

export default Time