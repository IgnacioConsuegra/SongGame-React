import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Circle.css';

export const Circle = ({velocity, middleAt, unit}) => {
  const [position, setPosition] = useState((unit.current * 11));
  
  const thisButton = useRef();

  const interval = useRef();
  const calledOnce = useRef(false);
  const thisPosition = useRef();
  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: '5000px'
  }

  useEffect(() => {
    if(calledOnce.current){
      interval.current = setInterval(() => {
        thisButton.current.style.left = `${thisPosition.current - (16 * 3)}px`;
        if(thisPosition.current > unit.current * 4.5){
          thisPosition.current = (thisPosition.current - (velocity / 1)).toFixed(2)
        }
      }, 1000 / 1)
    }
    if(calledOnce.current === false) {
      thisPosition.current = unit.current * 11;
      thisButton.current.style.left = unit.current * 11;
      calledOnce.current = true;
    }
    return () => {
      clearInterval(interval.current);
    }
  }, []);

  return (
    <div className='row-Circle' ref={thisButton} style={styles}>
      {middleAt}
    </div>
  )
}

export default Circle;