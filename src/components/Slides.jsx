import React from 'react'
import { useState } from 'react'

const Slides = ({slides}) => {

    const [index,setIndex] = useState(0);

    const restart = () => setIndex(0);
    const next = () => setIndex(prev => Math.min(prev + 1, slides.length - 1));
    const prev = () => setIndex(prev => Math.max(prev - 1, 0));
    
  return (
    <>
    <h1>Sledes Show</h1>
    <button onClick={restart}>Restart</button>
    <button onClick={next}>Next</button>
    <button onClick={prev}>prev</button>

    <h1>{slides[index].title}</h1>
    <p>{slides[index].text}</p>
    </>
  ) 
}

export default Slides   