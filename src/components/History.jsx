import React from 'react'

const History = ({history}) => {
  
  return (
    <div className='border-2 h-full w-3/4 bg-black '>
      <h1 className='py-2 text-xl font-bold bg-[#00df9a] justify-center flex rounded-b-md text-black'> History</h1>
      {history.map(member => {
        return (
          <div className='my-3 w-[90%] mx-auto border-2 bg-[#00df9a] rounded-xl text-black'>
            <p className='mx-1 my-1 text-md font-bold'>{member.title}</p>
            <hr></hr>
            <p className='mx-1 my-2 text-md truncate'>{member.mediaLink}</p>
            <p className='mx-1 text-md pb-1'>{member.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default History