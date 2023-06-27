import React from 'react'

function Child({changeText}) {
  return (
    <div className='child'>
        <h2>Child Component</h2>
        <input type='text' onChange={(e)=>changeText(e.target.value)}/>
    </div>
  )
}

export default Child