import React, { useState } from 'react'
import Draggable from 'react-draggable'
const Text = () => {
  const [isEditable,setIsEditable] = useState(false);
  const [text,setText]=useState("Double click to write text")
  return (
    <div  >

      <Draggable>
        {isEditable ? (<input className='border-2 rounded border-gray-600' onKeyPress={(e)=>e.key==='Enter'?setIsEditable(false):setIsEditable(true)} onChange={(e)=> setText(e.target.value)} />)
        :
        (<div><h1 className='text-gray-900 lg:text-4xl md:text-2xl  text-xl font-bold w-96 text-wrap' onDoubleClick={(e) => setIsEditable(true)}>{text}</h1></div>)}
      </Draggable>
    </div>
  )
}

export default Text
