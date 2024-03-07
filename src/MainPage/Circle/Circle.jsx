import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Circle.css';

export const Circle = ({ middleAt, currentPosition}) => {
  
  const thisButton = useRef();

  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: `5000px`,
  }

  useEffect(() => {
    thisButton.current.style.left = `${currentPosition}px`;
  }, [currentPosition]);

  return (
    <div className='row-Circle' ref={thisButton} style={styles}>
      {middleAt}
    </div>
  )
}

export default Circle;