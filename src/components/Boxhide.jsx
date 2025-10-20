import React, { useState } from 'react'

function App() {

const [iscardvisible,setIscardvisible] = useState(false);

function tougle() {
  setIscardvisible((prevIscardvisible) => !prevIscardvisible);
}


  return (
    <>
    <div>
<button onClick={tougle}> 
  {iscardvisible ? 'Hide Card':' Show Card'}
</button>
{iscardvisible &&(
  <div style={{border:'3px solid gray'}}>
<h3>Logic</h3>
<p>Is More Important to code</p>
<button onClick={tougle}>close </button>
</div>)}

    </div>
    
    </>
  )
}

export default App