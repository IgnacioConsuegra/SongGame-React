import { useLayoutEffect, useRef, useState } from 'react';
import './Circle.css';

export const Circle = ({numCircle}) => {
  const [position, setPosition] = useState(1000);
  const thisButton = useRef();

  useLayoutEffect(() => {
    setTimeout(() =>{
      thisButton.current.style.left = `calc(0% + ${position}px)`;
      if(position > 500){
        setPosition((prevP) => prevP - 5);
      }
    }, 1000 / 30);
  }, [position]);


  return (
    <div className='row-Circle' ref={thisButton}>
      {numCircle}
    </div>
  )
}

export default Circle;