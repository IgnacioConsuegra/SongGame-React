import {Row} from './Row/Row';
import { createContext, useState, useRef } from 'react';
import './MainPage.css';
import { useEffect } from 'react';

export const KeyPressContext = createContext();


export const MainPage = () => {
  const [lastPressed, setLastPressed]  = useState({key : '', times : 0});
  const [rows, setRows] = useState([]);
  const sectionRef = useRef();
  const sectionUnit = useRef();
  const row1Circles = [
    {
      middleAt: 6,
      velocity: 1,
      index : 'A' + 3,
    },
    {
      middleAt: 7,
      velocity: 2,
      index : 'A' + 7,
    },
    {
      middleAt: 8,
      velocity: 3,
      index : 'A'+ 8,
    },
    {
      middleAt: 9,
      velocity: 1,
      index : 'A'+ 9,
    },
    {
      middleAt: 10,
      velocity: 1,
      index : 'A'+ 10,
    },
    {
      middleAt: 11,
      velocity: 1,
      index : 'A'+ 11,
    },
    {
      middleAt: 20,
      velocity: 1,
      index : 'A'+ 20,
    },
  ]
  const row2Circles = [
    {
      middleAt: 6,
      velocity: 1,
      index : 'B' + 3,
    },
    {
      middleAt: 7,
      velocity: 1,
      index : 'B' + 7,
    },
    {
      middleAt: 8,
      velocity: 1,
      index : 'B'+ 8,
    },
    {
      middleAt: 9,
      velocity: 1,
      index : 'B'+ 9,
    },
    {
      middleAt: 10,
      velocity: 1,
      index : 'B'+ 10,
    },
    {
      middleAt: 11,
      velocity: 1,
      index : 'B'+ 11,
    },
  ]
  const row3Circles = [
    {
      middleAt: 6,
      velocity: 1,
      index : 'C' + 3,
    },
    {
      middleAt: 7,
      velocity: 1,
      index : 'C' + 7,
    },
    {
      middleAt: 8,
      velocity: 1,
      index : 'C'+ 8,
    },
    {
      middleAt: 9,
      velocity: 1,
      index : 'C'+ 9,
    },
    {
      middleAt: 10,
      velocity: 1,
      index : 'C'+ 10,
    },
    {
      middleAt: 11,
      velocity: 1,
      index : 'C'+ 11,
    },
  ]

  function calcCreationTime(arr){
    const distance = sectionUnit.current * 6;
    return arr.map((element) => 
    {
      const velocity = element.velocity * sectionUnit.current;
      const time = distance / velocity;
      const createAt = parseFloat((element.middleAt - time).toFixed(1));
      return {
        creationTime : createAt, 
        middleAt : element.middleAt, 
        velocity: element.velocity * sectionUnit.current, 
        index: element.index,
        originalPosition: sectionUnit.current * 11,
        currentPosition: sectionUnit.current * 11,
      }
    }).sort((a, b) => a.creationTime - b.creationTime);
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
        sectionUnit.current = (width / 10);
      }
      setRows([calcCreationTime(row1Circles), calcCreationTime(row2Circles), calcCreationTime(row3Circles)]);
    }
  }, [])


  return (
    <section ref={sectionRef}>
        <KeyPressContext.Provider value={lastPressed} >
            <Row elementId={1} circles={rows[0]} unit={sectionUnit}/>       
            {/* <Row elementId={2} circles={rows[1]} unit={sectionUnit}/>        */}
            {/* <Row elementId={3} circles={rows[2]} unit={sectionUnit}/>        */}
        </KeyPressContext.Provider>
    </section>
  )
}
