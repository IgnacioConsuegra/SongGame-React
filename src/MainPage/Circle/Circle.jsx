import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Circle.css';

export const Circle = ({velocity, time, middleAt, unit}) => {
  const thisButton = useRef();
  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: '5000px',
    animation: `moveLeft ${time + 1}s linear forwards`, 
    '--init': `${unit.current * 11}px`,
    '--end': `${(unit.current * 5) - (16 * 3)}px`,
  }


  return (
    <div className='row-Circle' ref={thisButton} style={styles}>
      {middleAt}
    </div>
  )
}

export default Circle;