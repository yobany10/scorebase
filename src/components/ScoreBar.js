import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './ScoreBar.css'

const ScoreBar = props => {
    return (
        <div className='scorebar-div'>
            <h1 className='scorebar-r-score'>Red: {props.rScore}</h1>
            <ButtonGroup className='scorebar-r-actions'>
                <DropdownButton as={ButtonGroup} title="R1" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="R1-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="R1-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="R1-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="R2" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="R2-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="R2-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="R2-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="R3" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="R3-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="R3-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="R3-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="R4" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="R4-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="R4-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="R4-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="R5" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="R5-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="R5-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="R5-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <ButtonGroup className='scorebar-y-actions'>
                <DropdownButton as={ButtonGroup} title="Y1" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="Y1-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="Y1-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="Y1-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Y2" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="Y2-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="Y2-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="Y2-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Y3" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="Y3-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="Y3-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="Y3-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Y4" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="Y4-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="Y4-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="Y4-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Y5" id="bg-nested-dropdown" variant='secondary'>
                  <Dropdown.Item eventKey="Y5-C" onSelect={(event) => props.handleQuizzerAction(event)}>Correct</Dropdown.Item>
                  <Dropdown.Item eventKey="Y5-E" onSelect={(event) => props.handleQuizzerAction(event)}>Error</Dropdown.Item>
                  <Dropdown.Item eventKey="Y5-F" onSelect={(event) => props.handleQuizzerAction(event)}>Foul</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <h1 className='scorebar-y-score'>Yellow: {props.yScore}</h1>
        </div>
    )
}

export default ScoreBar