import React, { useRef, useState } from 'react'

function Try1() {


const [time, setTime] = useState(0);
const [istime, setIstime] = useState(false);
const timerRef = useRef(null);

const start = () => {
    if (!istime) {
        setIstime(true);
        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000);

    }
}
const stop = () => {
if (istime) {
    setIstime(false);
    clearInterval(timerRef.current)
    
}
}
const reset = () => {
setTime(0)
setIstime(false)
clearInterval(timerRef.current);
}
 


const protimer = (tmt) => {
    const hr = Math.floor(tmt / 3600).toString().padStart(2,'0');
    const min = Math.floor((tmt % 3600) / 60).toString().padStart(2,'0');
    const sec = (tmt % 60).toString().padStart(2,'0');
      return ` ${hr}:${min}:${sec}`;
}
  return (
    <>
    <h2>Timer app using react js</h2>
    <h1>{protimer(time)}</h1>
    <button onClick={start}  >Start</button>
    <button onClick={stop}   >Stop</button>
    <button onClick={reset}  >Reset</button>
    </>
  )
}

export default Try1