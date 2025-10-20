import React, {  useState } from 'react'
import { useEffect } from 'react';

function Lightonoff() {

const [light,setLight] = useState(() => {
  const save = localStorage.getItem("light");
  return save ? JSON.parse(save) : false
});

useEffect(() => {
  localStorage.setItem("light", JSON.stringify(light))

 
}, [light])



function lightSwitch(){
    setLight((prevLight) => !prevLight)
}
  return (
    <>

    <button onClick={lightSwitch}>{light?'Light On':'Light Off'}</button>

    {light && (
           <div
           style={{
             width: '100px',
             height: '100px',
             margin: '20px auto',
             backgroundColor: light ? 'yellow' : 'gray',
             borderRadius: '50%',
             boxShadow: light ? '0 0 50px yellow' : 'none',
           }}
         ></div>
    )}
    </>
  )
}

export default Lightonoff