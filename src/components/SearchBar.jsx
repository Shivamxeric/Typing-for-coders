import React, { useState } from "react";

function SearchBar() {
  const [count, setCount] = useState(0);

function add(){
    setCount(count - 1)
    setCount(count + 1)
}
function minus(){
    setCount(count - 1)
}
function reset(){
    setCount(0)
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={minus}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default SearchBar;
