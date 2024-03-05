import {Row} from './Row/Row';
import { createContext, useState, useReducer } from 'react';
import './MainPage.css';
import { useEffect } from 'react';

export const TimeContext = createContext();
export const KeyPressContext = createContext();
export const GetMiddleButtonPosition = createContext();

function reducer(middleButtonPosition, action){
  switch(action.type) { 
    case 'getValue' : 
    console.log("myReducer", action.payload.x)
    // return { position : action.payload.x}
  }
}

export const MainPage = () => {
  const [middleButtonPosition, dispatch] = useReducer(reducer, {positionX : 520});
  const [time, setTime] = useState(0);
  const [lastPressed, setLastPressed]  = useState({key : '', times : 0});
  const positionX = middleButtonPosition;
  const refreshRate = 30;
  const middleAt = {
    row1 : [1, 2],
  }
  // function getCreatingTime(row){
  //   return row.map((element) => {
      
  //     return {distance: , velocity: }
  //   })
  // }

  function handleKeyPress(key){
    switch (key) {
      case 'z':
        setLastPressed((prev) => {
          return { key: 'z', times: prev.times + 1 };
        });
        break;
      case 'x':
        setLastPressed((prev) => {
          return { key: 'x', times: prev.times + 1 };
        });
        break;
      case 'c':
        setLastPressed((prev) => {
          return { key: 'c', times: prev.times + 1 };
        });
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    return() => {
      document.addEventListener('keydown', (event) => {
        handleKeyPress(event.key)
      });
    }
  }, [])
  useEffect(() => {
    const interval = setInterval(() => setTime(parseFloat((time + 0.1).toFixed(1))), 0.1 * 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <section>
      {time}
      <TimeContext.Provider value={time}>
        <KeyPressContext.Provider value={lastPressed} >
          <GetMiddleButtonPosition.Provider value={dispatch}>
            <Row elementId={1} circles={middleAt.row1} />       
          </GetMiddleButtonPosition.Provider>   
        </KeyPressContext.Provider>
      </TimeContext.Provider>
      {/* <Row elementId={1} circles={[1]}/> */}
      {/* <Row elementId={2} circles={[1]}/> */}
      {/* <Row elementId={3} circles={[1]}/> */}
    </section>
  )
}
