import React from 'react'
import Table from 'react-bootstrap/Table'

const ScoreTable = props => {
    return (
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Question</th>
      <th>Red Score</th>
      <th>Yellow Score</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    )
}

export default ScoreTable