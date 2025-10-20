import React, { useEffect, useState } from "react";
import axios from "axios";

function Backend() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>

      <h1>Its Jokes Comes From Backend </h1>
      <h3>Total Jokes: {jokes.length}</h3>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.id}</h2>
          <h3>Joke Title : {joke.title}</h3>
          <h4>{joke.body}</h4>
        </div> 
      ))}

    </>
  );
}

export default Backend;
