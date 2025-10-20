import React, { useCallback, useState } from 'react'

function Throoting() {

const [count, setCount] = useState(1)
let lastClick = 0;
const handleClick = useCallback(() => {
  const now = Date.now()
if (now - lastClick > 1000) {
  setCount((prev) => prev + 1);
  console.log(count);
  
  lastClick = now
}
}, [])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Throoting    