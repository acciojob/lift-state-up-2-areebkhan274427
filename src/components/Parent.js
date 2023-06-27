import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const [text,setText] = useState('')
  return (
    <div className='parent'>
        <h1>Parent Component</h1>
        <p>{text}</p>
        <Child changeText={setText}/>
    </div>
  )
}

export default Parent