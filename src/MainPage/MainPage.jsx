import {Row} from './Row/Row';
import {MusicPlayer} from './MusicPlayer/MusicPlayer';
import {MyButton} from './MyButton/MyButton'
import { createContext, useState, useRef } from 'react';
import './MainPage.css';
import { useEffect } from 'react';

export const KeyPressContext = createContext();


export const MainPage = () => {
  const [lastPressed, setLastPressed]  = useState({key : '', times : 0});
  const [init, setInit] = useState(false)
  const [rows, setRows] = useState([]);
  const sectionRef = useRef();
  const sectionUnit = useRef();
  const row1Circles = [
    {middleAt: 1.8, velocity: 6},
    {middleAt: 2.40, velocity: 6},
    {middleAt: 3.7, velocity: 6},
    {middleAt: 4.9, velocity: 5},
    {middleAt: 6.2, velocity: 4},
    {middleAt: 7.4, velocity: 3},
    {middleAt: 8.7, velocity: 3},
    {middleAt: 9.9, velocity: 3},
    {middleAt: 10.7, velocity: 3},
    {middleAt: 11.6, velocity: 3},
    {middleAt: 12.4, velocity: 3},
    {middleAt: 13.7, velocity: 3},
    {middleAt: 15.0, velocity: 3},
    {middleAt: 16.2, velocity: 3},
    {middleAt: 17.5, velocity: 3},
    {middleAt: 18.7, velocity: 3},
    {middleAt: 20.0, velocity: 3},
    {middleAt: 20.6, velocity: 3},
    {middleAt: 21.0, velocity: 3},
    {middleAt: 21.5, velocity: 3},
    {middleAt: 21.8, velocity: 3},
    {middleAt: 22.5, velocity: 3},
    {middleAt: 22.8, velocity: 3},
    {middleAt: 23.3, velocity: 3},
    {middleAt: 23.7, velocity: 3},
    {middleAt: 24.5, velocity: 3},
    {middleAt: 24.8, velocity: 3},
    {middleAt: 25.8, velocity: 3},
    {middleAt: 26.0, velocity: 3},
    {middleAt: 26.5, velocity: 3},
    {middleAt: 27.0, velocity: 3},
    {middleAt: 27.5, velocity: 3},
    {middleAt: 27.7, velocity: 3},
    {middleAt: 29.0, velocity: 3},
    {middleAt: 29.6, velocity: 3},
    {middleAt: 30.2, velocity: 3},
    {middleAt: 31.1, velocity: 3},
    {middleAt: 32.0, velocity: 3},
    {middleAt: 32.8, velocity: 3},
    {middleAt: 33.3, velocity: 3},
    {middleAt: 34.0, velocity: 3},
    {middleAt: 34.9, velocity: 3},
    {middleAt: 35.8, velocity: 3},
    {middleAt: 36.4, velocity: 3},
    {middleAt: 37.0, velocity: 3},
    {middleAt: 37.4, velocity: 3},
    {middleAt: 39.5, velocity: 3},
    {middleAt: 40.0, velocity: 3},
    {middleAt: 40.2, velocity: 3},
    {middleAt: 41.5, velocity: 3},
    {middleAt: 42.0, velocity: 3},
    {middleAt: 42.4, velocity: 3},
    {middleAt: 46.9, velocity: 3},
    {middleAt: 48.6, velocity: 3},
    {middleAt: 49.9, velocity: 3},
    {middleAt: 50.1, velocity: 3},
    {middleAt: 51.2, velocity: 3},
    {middleAt: 52.5, velocity: 3},
    {middleAt: 55.5, velocity: 3},
    {middleAt: 56.2, velocity: 3},
    {middleAt: 58.0, velocity: 3},
    {middleAt: 60.5, velocity: 3},
    {middleAt: 64.4, velocity: 3},
    {middleAt: 64.7, velocity: 3},
    {middleAt: 66.0, velocity: 3},
    {middleAt: 68.9, velocity: 3},
    {middleAt: 69.5, velocity: 3},
    {middleAt: 69.9, velocity: 3},
    {middleAt: 71.8, velocity: 3},
    {middleAt: 73.0, velocity: 3},
    {middleAt: 74.7, velocity: 3},
    {middleAt: 75.0, velocity: 3},
    {middleAt: 76.8, velocity: 3},
    {middleAt: 77.4, velocity: 3},
    {middleAt: 79.5, velocity: 3},
    {middleAt: 79.8, velocity: 3},
    {middleAt: 80.9, velocity: 3},
    {middleAt: 82.5, velocity: 3},

  ]
  const row2Circles = [
    {middleAt: 1.8, velocity: 6},
    {middleAt: 2.2, velocity: 6},
    {middleAt: 3.0, velocity: 5},
    {middleAt: 3.4, velocity: 5},
    {middleAt: 4.3, velocity: 5},
    {middleAt: 4.7, velocity: 5},
    {middleAt: 4.9, velocity: 5},
    {middleAt: 5.6, velocity: 5},
    {middleAt: 6.9, velocity: 4},
    {middleAt: 7.1, velocity: 3},
    {middleAt: 7.5, velocity: 3},
    {middleAt: 8.0, velocity: 3},
    {middleAt: 8.5, velocity: 3},
    {middleAt: 9.3, velocity: 3},
    {middleAt: 10.6, velocity: 3},
    {middleAt: 10.9, velocity: 3},
    {middleAt: 11.4, velocity: 3},
    {middleAt: 11.8, velocity: 3},
    {middleAt: 12.2, velocity: 3},
    {middleAt: 13.7, velocity: 3},
    {middleAt: 15.0, velocity: 3},
    {middleAt: 15.5, velocity: 3},
    {middleAt: 16.8, velocity: 3},
    {middleAt: 17.2, velocity: 3},
    {middleAt: 18.1, velocity: 3},
    {middleAt: 18.5, velocity: 3},
    {middleAt: 19.3, velocity: 3},
    {middleAt: 20.0, velocity: 3},
    {middleAt: 20.8, velocity: 3},
    {middleAt: 21.1, velocity: 3},
    // {middleAt: 21.4, velocity: 3},
    {middleAt: 21.8, velocity: 3},
    {middleAt: 22.5, velocity: 3},
    {middleAt: 23.3, velocity: 3},
    {middleAt: 23.8, velocity: 3},
    {middleAt: 25.2, velocity: 3},
    {middleAt: 26.1, velocity: 3},
    {middleAt: 28.2, velocity: 3},
    {middleAt: 29.9, velocity: 3},
    {middleAt: 30.8, velocity: 3},
    {middleAt: 31.1, velocity: 3},
    {middleAt: 32.3, velocity: 3},
    {middleAt: 33.7, velocity: 3},
    {middleAt: 34.5, velocity: 3},
    {middleAt: 35.2, velocity: 3},
    {middleAt: 36.2, velocity: 3},
    {middleAt: 36.5, velocity: 3},
    {middleAt: 37.7, velocity: 3},
    {middleAt: 38.4, velocity: 3},
    {middleAt: 39.0, velocity: 3},
    {middleAt: 39.7, velocity: 3},
    {middleAt: 40.6, velocity: 3},
    // {middleAt: 40.8, velocity: 3},
    {middleAt: 41.2, velocity: 3},
    // {middleAt: 41.4, velocity: 3},
    // {middleAt: 41.6, velocity: 3},
    {middleAt: 41.9, velocity: 3},
    {middleAt: 43.4, velocity: 3},
    {middleAt: 45.0, velocity: 3},
    {middleAt: 46.2, velocity: 3},
    {middleAt: 48.3, velocity: 3},
    {middleAt: 49.0, velocity: 3},
    {middleAt: 49.6, velocity: 3},
    {middleAt: 51.2, velocity: 3},
    {middleAt: 53.5, velocity: 3},
    {middleAt: 54.9, velocity: 3},
    {middleAt: 56.2, velocity: 3},
    {middleAt: 58.6, velocity: 3},
    {middleAt: 59.9, velocity: 3},
    {middleAt: 61.2, velocity: 3},
    {middleAt: 62.4, velocity: 3},
    {middleAt: 64.4, velocity: 3},
    {middleAt: 64.7, velocity: 3},
    {middleAt: 65.7, velocity: 3},
    {middleAt: 66.2, velocity: 3},
    {middleAt: 68.6, velocity: 3},
    {middleAt: 69.5, velocity: 3},
    {middleAt: 70.6, velocity: 3},
    {middleAt: 70.8, velocity: 3},
    {middleAt: 71.2, velocity: 3},
    {middleAt: 72.4, velocity: 3},
    {middleAt: 73.0, velocity: 3},
    {middleAt: 73.4, velocity: 3},
    {middleAt: 74.5, velocity: 3},
    {middleAt: 75.0, velocity: 3},
    {middleAt: 76.2, velocity: 3},
    {middleAt: 77.4, velocity: 3},
    {middleAt: 78.7, velocity: 3},
    {middleAt: 79.3, velocity: 3},
    {middleAt: 79.5, velocity: 3},
    {middleAt: 79.9, velocity: 3},
    {middleAt: 80.4, velocity: 3},
    {middleAt: 81.0, velocity: 3},
    {middleAt: 81.9, velocity: 3},


  ]
  const row3Circles = [
    {middleAt: 2.0, velocity: 6},
    {middleAt: 2.40, velocity: 6},
    {middleAt: 3.20, velocity: 5},
    {middleAt: 3.7, velocity: 5},
    {middleAt: 4.5, velocity: 5},
    {middleAt: 5.6, velocity: 5},
    {middleAt: 6.2, velocity: 4},
    {middleAt: 7.0, velocity: 3},
    {middleAt: 7.2, velocity: 3},
    {middleAt: 7.4, velocity: 3},
    {middleAt: 8.3, velocity: 3},
    {middleAt: 8.7, velocity: 3},
    {middleAt: 8.7, velocity: 3},
    {middleAt: 9.9, velocity: 3},
    {middleAt: 10.5, velocity: 3},
    {middleAt: 11.1, velocity: 3},
    {middleAt: 12.0, velocity: 3},
    {middleAt: 12.4, velocity: 3},
    {middleAt: 13.2, velocity: 3},
    {middleAt: 14.3, velocity: 3},
    {middleAt: 15.5, velocity: 3},
    {middleAt: 16.2, velocity: 3},
    {middleAt: 17.0, velocity: 3},
    {middleAt: 17.5, velocity: 3},
    {middleAt: 18.3, velocity: 3},
    {middleAt: 18.7, velocity: 3},
    {middleAt: 20.0, velocity: 3},
    {middleAt: 20.9, velocity: 3},
    {middleAt: 21.3, velocity: 3},
    // {middleAt: 21.6, velocity: 3},
    {middleAt: 22.2, velocity: 3},
    {middleAt: 23.7, velocity: 3},
    {middleAt: 26.8, velocity: 3},
    {middleAt: 27.5, velocity: 3},
    {middleAt: 29.9, velocity: 3},
    {middleAt: 30.8, velocity: 3},
    {middleAt: 31.5, velocity: 3},
    {middleAt: 32.3, velocity: 3},
    {middleAt: 33.3, velocity: 3},
    {middleAt: 34.3, velocity: 3},
    {middleAt: 34.9, velocity: 3},
    {middleAt: 35.8, velocity: 3},
    {middleAt: 38.1, velocity: 3},
    {middleAt: 38.7, velocity: 3},
    {middleAt: 39.3, velocity: 3},
    {middleAt: 40.0, velocity: 3},
    {middleAt: 40.7, velocity: 3},
    {middleAt: 41.1, velocity: 3},
    // {middleAt: 41.5, velocity: 3},
    {middleAt: 41.7, velocity: 3},
    {middleAt: 42.4, velocity: 3},
    {middleAt: 43.7, velocity: 3},
    {middleAt: 45.8, velocity: 3},
    {middleAt: 47.5, velocity: 3},
    {middleAt: 48.4, velocity: 3},
    {middleAt: 49.3, velocity: 3},
    {middleAt: 50.1, velocity: 3},
    {middleAt: 53.8, velocity: 3},
    {middleAt: 54.3, velocity: 3},
    {middleAt: 55.8, velocity: 3},
    {middleAt: 59.3, velocity: 3},
    {middleAt: 61.8, velocity: 3},
    {middleAt: 62.4, velocity: 3},
    {middleAt: 64.5, velocity: 3},
    {middleAt: 64.9, velocity: 3},
    {middleAt: 65.6, velocity: 3},
    {middleAt: 69.4, velocity: 3},
    {middleAt: 70.8, velocity: 3},
    {middleAt: 71.2, velocity: 3},
    {middleAt: 71.8, velocity: 3},
    {middleAt: 73.4, velocity: 3},
    {middleAt: 74.3, velocity: 3},
    {middleAt: 75.0, velocity: 3},
    {middleAt: 75.4, velocity: 3},
    {middleAt: 78.8, velocity: 3},
    {middleAt: 79.3, velocity: 3},
    {middleAt: 79.9, velocity: 3},
    {middleAt: 81.2, velocity: 3},

  ]


  function calcCreationTime(arr, char){
    const distance = (sectionUnit.current * 6);
    const waiT = 0.3;
    return arr.map((element) => 
    {
      const velocity = element.velocity * sectionUnit.current;
      const time = distance / velocity;
      const createAt = parseFloat(((element.middleAt + waiT) - time).toFixed(1));
      return {
        creationTime : createAt, 
        middleAt : (element.middleAt + waiT), 
        index: char + (element.middleAt +waiT),
        initPosition: sectionUnit.current * 11,
        endPosition : (sectionUnit.current * 5) - (16 * 3),
        timeNeed: (element.middleAt + waiT) - createAt,
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
  function handleInit() {
    setInit(true);
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
      setRows([calcCreationTime(row1Circles, "A"), calcCreationTime(row2Circles, "B"), calcCreationTime(row3Circles, "C")]);
    }
  }, [])

  

  return (
    <section ref={sectionRef}>
      {
        !init && 
        (
          <MyButton handleClick={handleInit}>Init</MyButton>
        )
      }
      {
        init && (
          <KeyPressContext.Provider value={lastPressed} >
            <audio src="public/song.mp3" autoPlay></audio>
            <Row elementId={1} circles={rows[0]} unit={sectionUnit}/>       
            <Row elementId={2} circles={rows[1]} unit={sectionUnit}/>       
            <Row elementId={3} circles={rows[2]} unit={sectionUnit}/> 
          </KeyPressContext.Provider>
        )
      }
    </section>
  )
}
