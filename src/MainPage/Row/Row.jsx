import {Circle} from '../Circle/Circle';
import { useEffect, useRef, useContext, useState } from 'react';
import { TimeContext, KeyPressContext, GetMiddleButtonPosition } from '../MainPage';

import './Row.css'
// eslint-disable-next-line react/prop-types
export const Row = ({elementId, circles}) => {
  const [isDisplayed, setIsDisplayed]  = useState([]);
  const [testing, setTesting] = useState([
  {
    creationTime: 2,
    middleAt : 2,
    id: 2,
    velocity: 5,
  },
  {
    creationTime: 3,
    middleAt : 3,
    id: 3,
    velocity : 50,
  }]);

  const lastPressed = useContext(KeyPressContext);
  const time = useContext(TimeContext);
  const returnMiddleButtonPosition = useContext(GetMiddleButtonPosition);
  const miMiddleButton = useRef(null);

  function getElementPosition(element) {
    var rect = element.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }
  function handleChange() {
    if(lastPressed.key === 'z' && elementId === 1){
      if((isDisplayed[0].middleAt >= (time - 0.5)) && (isDisplayed[0].middleAt <= (time + 0.5))  ){
        isDisplayed.shift();
      } else{
        isDisplayed.shift();
      }
    }
  }
  
  

  useEffect(() =>{
    return() => {
      const myPosition = miMiddleButton.current.offsetLeft;
    } 
  }, []);

  useEffect(() =>{
    handleChange();
  }, [lastPressed])

  useEffect(() => {
    try{
      if(testing[0].creationTime === time)
      {
        setIsDisplayed((prev) => [...prev,{middleAt:  testing[0].middleAt, velocity: testing[0].velocity}]); 
        const newArray = testing.slice(1);
        setTesting(newArray);
      }
    }catch(err) {
    }
  }, [time]);

  useEffect(() => {
  }, [testing])
  useEffect(() => {
  }, [isDisplayed]);


  return (
    <div className='row'>
      <div className='row-circle' id={`${elementId}`} ref={miMiddleButton}></div>
      {
        // eslint-disable-next-line react/prop-types
        isDisplayed.map((element) => {
          return <Circle key={element.middleAt} velocity={element.velocity} />
        })
      }
    </div>
  )
}

export default Row;