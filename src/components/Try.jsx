

import React, { useState ,useEffect} from 'react'

const Try = () => {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleSize = () =>  setWidth(window.innerWidth);
     window.addEventListener('resize', handleSize); 
  
    return () => window.removeEventListener('resize', handleSize);
  }, [])
  

  useEffect(() => {
    const handleSize = () =>  setHeight(window.innerHeight);
     window.addEventListener('resize', handleSize); 
  
    return () => window.removeEventListener('resize', handleSize);
  }, [])
  
 

  return (
    <>
    <h1>Width px{width}</h1>
    <h1>Height px{height}</h1>
    </>
  )
}

export default Try