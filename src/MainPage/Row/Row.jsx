import {Circle} from '../Circle/Circle';
import { useEffect, useRef, useContext, useState } from 'react';
import { KeyPressContext } from '../MainPage';

import './Row.css'
// eslint-disable-next-line react/prop-types
export const Row = ({elementId, circles, unit}) => {

  const [isDisplayed, setIsDisplayed]  = useState([]);
  const [creationTime, setCreationTime] = useState([]);
  const [keyResult, setKeyResult] = useState(false);
  const [time, setTime] = useState(0);
  const [middleButtonNewClass, setMiddleButtonNewClass] = useState(0)
  const initTime = useRef(0);
  const audioRef = useRef();
  const lastPressed = useContext(KeyPressContext);
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
      handleAudio();
      try { 

        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.3))  ){
          isDisplayed.shift();
          setKeyResult(true);
          setMiddleButtonNewClass("goodTiming");
        } else{
          // isDisplayed.shift();
          setKeyResult(false);
          setMiddleButtonNewClass("badTiming");
        }
      }catch(err){
        setKeyResult(false);
        setMiddleButtonNewClass("badTiming");
        return -1;
      }
    }
    if(lastPressed.key === 'x' && elementId === 2){
      handleAudio();
      try{
        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.3))  ){
          isDisplayed.shift();
          setKeyResult(true);
          setMiddleButtonNewClass("goodTiming");

        } else{
          // isDisplayed.shift();
          setKeyResult(false);
          setMiddleButtonNewClass("badTiming");

        }
      }catch(err){
        setKeyResult(false);
        setMiddleButtonNewClass("badTiming");
        return -1;
      }
    }
    if(lastPressed.key === 'c' && elementId === 3){
      handleAudio();
      try{
        if((isDisplayed[0].middleAt >= (time - 0.8)) && (isDisplayed[0].middleAt <= (time + 0.3))  ){
          isDisplayed.shift();
          setKeyResult(true);
          setMiddleButtonNewClass("goodTiming");

        } else{
          // isDisplayed.shift();
          setKeyResult(false);
          setMiddleButtonNewClass("badTiming");
        }
      }catch(err){
        setKeyResult(false);
        setMiddleButtonNewClass("badTiming");

        return -1;
      }
    }

  }
  function handleAudio(){
    audioRef.current.play();
  }
  useEffect(() =>{
    
    return() => {
      setCreationTime(234);
    } 
  }, []);

  useEffect(() =>{
    initTime.current = Date.now();
    setCreationTime(circles);
    setInterval(() => {
      setTime(parseFloat(((Date.now() - initTime.current) / 1000).toFixed(1)));
    }, 1000 / 100);
  }, [circles]);
  
  useEffect(() =>{
    handleChange();
  }, [lastPressed])

  useEffect(() => {
    try{
      if(creationTime[0].creationTime === time)
      {
        setIsDisplayed((prev) => {
          const newArray = [...prev, { ...creationTime[0]}];
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
      if((typeof isDisplayed[0]["middleAt"] === 'number') && (time - 0> isDisplayed[0]["middleAt"])){
        const newArray = isDisplayed.slice(1);
        setIsDisplayed(newArray);
        setMiddleButtonNewClass("badTiming");

      }
    }catch(error) {
      true;
    }
  }, [time]);

  useEffect(() => {
    setTimeout(() => {
      setMiddleButtonNewClass(false);
    }, 1000/10);
  }, [middleButtonNewClass])


  return (
    <div className='row' style={{width: unit * 10}}>
      
      <div 
      style={{left: `${0 + ((unit.current * 5) - (16*3) )}px`}} 
      className={`row-circle ${middleButtonNewClass}`} 
      id={`${elementId}`} 
      ref={miMiddleButton} >
      {
        keyResult === true ? ('Good') : ('Bad')
      }
      
      </div>
      {
        // eslint-disable-next-line react/prop-types
        isDisplayed.map((element) => {
          return <Circle 
          key={element.middleAt} 
          middleAt = {element.middleAt} 
          initPosition={element.initPosition}
          endPosition={element.endPosition} 
          timeNeed={element.timeNeed}/>
        })
      }
      <div className='timeRow'>
      {/* {time} */}
      <audio src="public/hit.mp3" ref={audioRef}></audio>
      </div>
    </div>
  )
}

export default Row;