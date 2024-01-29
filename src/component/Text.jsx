import React, { useState } from 'react'
import Draggable from 'react-draggable'
const Text = () => {
  const [isEditable,setIsEditable] = useState(false);
  const [text,setText]=useState("Double click to write text")
  const handleKeyPress = (e) => {
    e.key==='Enter'?setIsEditable(false):setIsEditable(true)
  }
  const handleChange = (e) =>{
    setText(e.target.value)
  }
  return (
    <div  >

      <Draggable>
        {isEditable ? (<input className='border-2 rounded border-gray-600'onDoubleClick={(e) => setIsEditable(false)} onKeyPress={handleKeyPress} onChange={handleChange} />)
        :
        (<div><h1 className='text-gray-900 lg:text-2xl md:text-2xl  text-lg font-bold w-96 text-wrap' onDoubleClick={(e) => setIsEditable(true)}>{text}</h1></div>)}
      </Draggable>
    </div>
  )
}

export default Text
