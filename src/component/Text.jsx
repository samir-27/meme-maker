import React, { useState } from 'react'
import Draggable from 'react-draggable'
const Text = () => {
  const [isEditable,setIsEditable] = useState(false);
  const [text,setText]=useState("Double click to write text")
  return (
    <div>

      <Draggable>
        {isEditable ? (<input className='border-2 rounded border-gray-600' onDoubleClick={(e) => setIsEditable(false)} onChange={(e)=> setText(e.target.value)} />)
        :
        (<h1 className='text-gray-600 text-4xl font-bold' onDoubleClick={(e) => setIsEditable(true)}>{text}</h1>)}
      </Draggable>
    </div>
  )
}

export default Text
