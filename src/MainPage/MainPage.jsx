import {Row} from './Row/Row';
import { createContext, useState, useRef } from 'react';
import './MainPage.css';
import { useEffect } from 'react';
import Timer from './Timer/Timer';

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
    {middleAt: 7, velocity: 1, index: 'B7'},
    {middleAt: 8, velocity: 1, index: 'B8'},
    {middleAt: 9, velocity: 1, index: 'B9'},
    {middleAt: 10, velocity: 1, index: 'B10'},
    {middleAt: 11, velocity: 1, index: 'B11'},
    {middleAt: 12, velocity: 1, index: 'B12'},
    {middleAt: 13, velocity: 1, index: 'B13'},
    {middleAt: 14, velocity: 1, index: 'B14'},
    {middleAt: 15, velocity: 1, index: 'B15'},
    {middleAt: 16, velocity: 1, index: 'B16'},
    {middleAt: 17, velocity: 1, index: 'B17'},
    {middleAt: 18, velocity: 1, index: 'B18'},
    {middleAt: 19, velocity: 1, index: 'B19'},
    {middleAt: 20, velocity: 1, index: 'B20'},
    {middleAt: 21, velocity: 1, index: 'B21'},
    {middleAt: 22, velocity: 1, index: 'B22'},
    {middleAt: 23, velocity: 1, index: 'B23'},
    {middleAt: 24, velocity: 1, index: 'B24'},
    {middleAt: 25, velocity: 1, index: 'B25'},
    {middleAt: 26, velocity: 1, index: 'B26'},
    {middleAt: 27, velocity: 1, index: 'B27'},
    {middleAt: 28, velocity: 1, index: 'B28'},
    {middleAt: 29, velocity: 1, index: 'B29'}
  ]
  const row3Circles = [
    {middleAt: 7, velocity: 1, index: 'C7'},
    {middleAt: 8, velocity: 1, index: 'C8'},
    {middleAt: 9, velocity: 1, index: 'C9'},
    {middleAt: 10, velocity: 1, index: 'C10'},
    {middleAt: 11, velocity: 1, index: 'C11'},
    {middleAt: 12, velocity: 1, index: 'C12'},
    {middleAt: 13, velocity: 1, index: 'C13'},
    {middleAt: 14, velocity: 1, index: 'C14'},
    {middleAt: 15, velocity: 1, index: 'C15'},
    {middleAt: 16, velocity: 1, index: 'C16'},
    {middleAt: 17, velocity: 1, index: 'C17'},
    {middleAt: 18, velocity: 1, index: 'C18'},
    {middleAt: 19, velocity: 1, index: 'C19'},
    {middleAt: 20, velocity: 1, index: 'C20'},
    {middleAt: 21, velocity: 1, index: 'C21'},
    {middleAt: 22, velocity: 1, index: 'C22'},
    {middleAt: 23, velocity: 1, index: 'C23'},
    {middleAt: 24, velocity: 1, index: 'C24'},
    {middleAt: 25, velocity: 1, index: 'C25'},
    {middleAt: 26, velocity: 1, index: 'C26'},
    {middleAt: 27, velocity: 1, index: 'C27'},
    {middleAt: 28, velocity: 1, index: 'C28'},
    {middleAt: 29, velocity: 1, index: 'C29'}
  ]

  function calcCreationTime(arr){
    const distance = (sectionUnit.current * 6);
    return arr.map((element) => 
    {
      const velocity = element.velocity * sectionUnit.current;
      const time = distance / velocity;
      const createAt = parseFloat((element.middleAt - time).toFixed(1));
      return {
        creationTime : createAt, 
        middleAt : element.middleAt, 
        index: element.index,
        initPosition: sectionUnit.current * 11,
        endPosition : (sectionUnit.current * 5) - (16 * 3),
        timeNeed: element.middleAt - createAt,
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
        sectionUnit.current = parseFloat((width / 10));
      }
      setRows([calcCreationTime(row1Circles), calcCreationTime(row2Circles), calcCreationTime(row3Circles)]);
    }
  }, [])


  return (
    <section ref={sectionRef}>
        <KeyPressContext.Provider value={lastPressed} >
            <Row elementId={1} circles={rows[0]} unit={sectionUnit}/>       
            <Row elementId={2} circles={rows[1]} unit={sectionUnit}/>       
            <Row elementId={3} circles={rows[2]} unit={sectionUnit}/>       
        </KeyPressContext.Provider>
    </section>
  )
}
