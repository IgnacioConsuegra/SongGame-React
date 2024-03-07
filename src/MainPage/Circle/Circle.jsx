import { useEffect, useLayoutEffect, useRef, useState, creationTime } from 'react';
import './Circle.css';

export const Circle = ({velocity, time, middleAt, unit, creationTime}) => {

  const thisButton = useRef();
  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: `${(unit.current * 11) - (16 * 3)}px`,
    animation: `moveLeft ${time}s linear forwards`, 
    '--init': `${(unit.current * 11) - (16 * 3)}px`,
    '--end': `${(unit.current * 5) - (16 * 3)}px`,
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