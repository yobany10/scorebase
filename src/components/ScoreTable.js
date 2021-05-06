import React from 'react'
import Table from 'react-bootstrap/Table'

const ScoreTable = props => {

    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Question</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {props.render}
          </tbody>
        </Table>
        </div>
    )
}

export default ScoreTable