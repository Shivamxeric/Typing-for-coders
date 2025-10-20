import React, { useState } from "react";

function Jokemake() {
  const [joke, setJoke] = useState("");
  async function fetchjoke() {                   
    try {                                             

      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);                                                     
    } catch (error) {                                                                
      alert("something went wrong", error);      
    }
  }

  return (
    <>
      <h1>Joke Generator</h1>
      <button onClick={fetchjoke}>Get a Joke</button>
      <p>{joke}</p>
    </>
  );
}

export default Jokemake;