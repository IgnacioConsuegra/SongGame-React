import { useEffect, useLayoutEffect, useRef, useState, creationTime } from 'react';
import './Circle.css';

export const Circle = ({ middleAt, initPosition, endPosition, timeNeed}) => {
  
  const thisButton = useRef();

  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: `5000px`,
    animation: `moveLeft ${timeNeed}s linear forwards`,
    '--init': `${initPosition}px`,
    '--end': `${endPosition}px`,
  }



  return (
    <div className='row-Circle' ref={thisButton} style={styles}>
      {middleAt}
      <br />
      Seconds{time}
      <br />
      {creationTime}
    </div>
  )
}

export default Circle;