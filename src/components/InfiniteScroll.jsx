import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]); 
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const loadTriggerRef = useRef(null); // ✅ Ref for the trigger element

  useEffect(() => {
    fetchMoreItems();
  }, [page]);

  const fetchMoreItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const newItems = await response.json();
      setItems((prev) => [...prev, ...newItems]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (loadTriggerRef.current) {
      observerRef.current.observe(loadTriggerRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []); // ✅ Corrected empty dependencies

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      <div ref={loadTriggerRef} style={{ height: "50px", background: "lightgray" }}></div>
      {loading && <p>Loading Data... Just a second</p>}
    </div>
  );
};

export default InfiniteScroll;
