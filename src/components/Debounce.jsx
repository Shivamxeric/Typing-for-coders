import React, { useState, useEffect } from "react";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim() !== "") {
        fetchResults(query);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const fetchResults = async (searchItem) => {
    setLoading(true);
    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchItem}`);
      const data = await response.json();
      setResult(data.query.search); // ✅ FIXED: Correct API response structure
    } catch (error) {
      console.error("Error Fetching search results:", error);
    } finally {
      setLoading(false); // ✅ FIXED: Ensures loading state resets after API call
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Wikipedia..."     
        value={query}                 
        onChange={(e) => setQuery(e.target.value)}
      />                                  
      {loading && <p>Loading...</p>}                                  
      <ul>              
        {result.map((item) => (
          <li key={item.pageid}>
            <a
              href={`https://en.wikipedia.org/wiki/${item.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </li>    
        ))}
      </ul>
    </div>
  );
};

export default Debounce;
