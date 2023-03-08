import React from 'react'

const History = ({history}) => {
  
  return (
    <div>
      <h1> This is the History</h1>
      {history.map(member => {
        return (
          <div>
            <p>{member.title}</p>
            <p>{member.mediaLink}</p>
            <p>{member.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default History