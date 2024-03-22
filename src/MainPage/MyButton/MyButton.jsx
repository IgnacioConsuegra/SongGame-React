import React from 'react'
import './MyButton.css'
export const MyButton = ({handleClick}) => {
  return (
    <button onClick={handleClick} className='MainButton'>Init</button>
  )
}

export default MyButton