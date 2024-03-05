import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Circle.css';

export const Circle = ({velocity, middleAt, unit}) => {
  const [position, setPosition] = useState(unit.current * 11);
  const thisButton = useRef();
  
  const styles = {
    fontSize: `16px`,
    width: `6em`,
    height: `6em`,
    left: '5000px'
  }

  useLayoutEffect(() => {
    
    setTimeout(() =>{
      thisButton.current.style.left = `${position - (16 * 6)}px`;
      if(position > 500){
        setPosition((prevP) => prevP - (velocity / 30));
      }
    }, 1000 / 30);
  }, [position]);


  return (
    <div className='row-Circle' ref={thisButton} style={styles}>
      {middleAt}
    </div>
  )
}

export default Circle;