import {Circle} from '../Circle/Circle';
import { useEffect, useRef, useContext, useState } from 'react';
import { TimeContext, KeyPressContext } from '../MainPage';

import './Row.css'
// eslint-disable-next-line react/prop-types
export const Row = ({elementId, circles, unit}) => {

  const [isDisplayed, setIsDisplayed]  = useState([]);
  const [creationTime, setCreationTime] = useState([]);
  const [keyResult, setKeyResult] = useState(false);

  const lastPressed = useContext(KeyPressContext);
  const time = useContext(TimeContext);
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
      try { 
        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.1))  ){
          isDisplayed.shift();
          setKeyResult(true);
        } else{
          isDisplayed.shift();
          setKeyResult(false);
        }
      }catch(err){
        setKeyResult(false);
        return -1;
      }
    }
    if(lastPressed.key === 'x' && elementId === 2){
      try{
        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.1))  ){
          isDisplayed.shift();
          setKeyResult(true);
        } else{
          isDisplayed.shift();
          setKeyResult(false);
        }
      }catch(err){
        setKeyResult(false);
        return -1;
      }
    }
    if(lastPressed.key === 'c' && elementId === 3){
      try{
        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.1))  ){
          isDisplayed.shift();
          setKeyResult(true);
        } else{
          isDisplayed.shift();
          setKeyResult(false);
        }
      }catch(err){
        setKeyResult(false);
        return -1;
      }
    }
  }
  
  

  useEffect(() =>{
    return() => {
      setCreationTime(234);
    } 
  }, []);

  useEffect(() =>{
    setCreationTime(circles);
  }, [circles]);
  
  useEffect(() =>{
    handleChange();
  }, [lastPressed])

  useEffect(() => {
    try{
      
      if(creationTime[0].creationTime === time)
      {
        setIsDisplayed((prev) => {
          const newArray = [...prev, { creationTime : creationTime[0].creationTime, middleAt: creationTime[0].middleAt, velocity: creationTime[0].velocity, time: creationTime[0].time}];
          newArray.sort((a, b) => a.middleAt - b.middleAt);
        
          return newArray;
        }); 
        const newArray = creationTime.slice(1);
        setCreationTime(newArray);
      }
      if(creationTime[0].creationTime < time){
        const newArray = creationTime.slice(1);
        setCreationTime(newArray);
      }
    }catch(err) {
      true;
    }
    try{  
      if((typeof isDisplayed[0]["middleAt"] === 'number') && (time - 0.2 > isDisplayed[0]["middleAt"])){
        const newArray = isDisplayed.slice(1);
        setIsDisplayed(newArray);
      }
    }catch(error) {
      true;
    }
  }, [time]);

  useEffect(() => {
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
          return <Circle key={element.middleAt} creationTime={element.creationTime} velocity={element.velocity} time={element.time} middleAt = {element.middleAt} unit={unit}/>
        })
      }
    </div>
  )
}

export default Row;