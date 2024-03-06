import {Circle} from '../Circle/Circle';
import { useEffect, useRef, useContext, useState } from 'react';
import { TimeContext, KeyPressContext, GetMiddleButtonPosition } from '../MainPage';

import './Row.css'
// eslint-disable-next-line react/prop-types
export const Row = ({elementId, circles, unit}) => {
  const [isDisplayed, setIsDisplayed]  = useState([]);
  const [testing, setTesting] = useState([]);
  const [keyResult, setKeyResult] = useState(false);

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
      if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.1))  ){
        isDisplayed.shift();
        setKeyResult(true);
      } else{
        isDisplayed.shift();
        setKeyResult(false);
      }
    }
  }
  
  

  useEffect(() =>{
    return() => {
      const myPosition = miMiddleButton.current.offsetLeft;
      setTesting(234);
    } 
  }, []);

  useEffect(() =>{
    console.log(circles)
    setTesting(circles);
  }, [circles])
  useEffect(() =>{
    handleChange();
  }, [lastPressed])

  useEffect(() => {
    try{
      if(testing[0].creationTime === time)
      {
        setIsDisplayed((prev) => {
          const newArray = [...prev, { middleAt: testing[0].middleAt, velocity: testing[0].velocity }];
          newArray.sort((a, b) => a.middleAt - b.middleAt);
        
          return newArray;
        }); 
        const newArray = testing.slice(1);
        setTesting(newArray);
      }
      if(testing[0].creationTime < time){
        const newArray = testing.slice(1);
        setTesting(newArray);
      }
      if(isDisplayed[0]["middleAt"] === Number && isDisplayed[0]["middleAt"] >  time){
        const newArray = isDisplayed.slice(1);
        setIsDisplayed(newArray);
        console.log("Removing");
      }
    }catch(err) {
      true;
    }
  }, [time]);

  useEffect(() => {
    console.log("IS displayed : ", isDisplayed);
  }, [isDisplayed]);


  return (
    <div className='row' style={{width: unit * 10}}>
      <div style={{left: `${0 + ((unit.current * 5) - (16*3) )}px`}} className='row-circle' id={`${elementId}`} ref={miMiddleButton} >
      {
        keyResult === true ? ('Good') : ('Bad')
      }
      </div>
      {
        // eslint-disable-next-line react/prop-types
        isDisplayed.map((element) => {
          return <Circle key={element.middleAt} velocity={element.velocity} middleAt = {element.middleAt} unit={unit}/>
        })
      }
    </div>
  )
}

export default Row;