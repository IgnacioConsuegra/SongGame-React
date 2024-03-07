import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const initValue = useRef();

  useEffect(() => {
    initValue.current = Date.now()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTimer (((Date.now() - initValue.current)/1000).toFixed(1) ), 1 * 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return(
    <div>{timer}</div>
  )

  return(
    <div>{startTime}</div>
  )
}

export default Timer