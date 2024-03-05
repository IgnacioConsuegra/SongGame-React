import {Row} from './Row/Row';
import { createContext, useState, useReducer, useRef } from 'react';
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
  const [row1, setRow1] = useState([]);
  const sectionRef = useRef();
  const sectionUnit = useRef();
  const refreshRate = 30;
  //This will be temp, 
  const row1Circles = [
    {
      middleAt: 2,
      velocity: 1,
      index : 'A' + 2,
    },
    {
      middleAt: 3,
      velocity: 5,
      index : 'A' + 3,
    },
    {
      middleAt: 4,
      velocity: 4,
      index : 'A'+ 4,
    },
    {
      middleAt: 5,
      velocity: 4,
      index : 'A'+ 5,
    },
    {
      middleAt: 6,
      velocity: 5,
      index : 'A'+ 6,
    },
    {
      middleAt: 7,
      velocity: 2,
      index : 'A'+ 7,
    },
    {
      middleAt: 8,
      velocity: 1,
      index : 'A'+ 8,
    },
  ]

  function calcCreationTime(arr){
    const distance = sectionUnit.current * 6;
    return arr.map((element) => 
    {
      const velocity = element.velocity * sectionUnit.current;
      const time = distance / velocity;
      const createAt = parseFloat((element.middleAt - time).toFixed(1));
      return {creationTime : createAt, middleAt : element.middleAt, velocity: element.velocity * sectionUnit.current, index: element.index}
    })
  }
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
      const element = sectionRef.current;

      if (element) {
        const width = element.offsetWidth;
        sectionUnit.current = width / 10;
      }
      setRow1(calcCreationTime(row1Circles));
    }
  }, [])
  useEffect(() => {
    const interval = setInterval(() => setTime(parseFloat((time + 0.1).toFixed(1))), 0.1 * 1000);
    return () => clearInterval(interval);
  }, [time]);
  useEffect(() =>{
  }, [row1])
  return (
    <section ref={sectionRef}>
      {time}
      <TimeContext.Provider value={time}>
        <KeyPressContext.Provider value={lastPressed} >
          <GetMiddleButtonPosition.Provider value={dispatch}>
            <Row elementId={1} circles={row1}/>       
          </GetMiddleButtonPosition.Provider>   
        </KeyPressContext.Provider>
      </TimeContext.Provider>
      {/* <Row elementId={1} circles={[1]}/> */}
      {/* <Row elementId={2} circles={[1]}/> */}
      {/* <Row elementId={3} circles={[1]}/> */}
    </section>
  )
}
