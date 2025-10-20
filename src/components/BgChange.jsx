import React, { useState } from "react";

function BgChange() {
  const [color, setColor] = useState();

  function colorchanger(e) {
    setColor(e.target.value);
    document.body.style.backgroundColor = color;
  }
                                                                                                        
  return (
    <>
      <input
        style={{ textAlign: "center", alignItems: "center" }}
        type="text"
        onChange={colorchanger}
        placeholder="Enter a color name"
      />
    </>
  );
}

export default BgChange;

