import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  function handleColorChange(e) {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    document.body.style.backgroundColor = selectedColor;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ padding: '10px' }}
      />
      <p style={{ marginTop: '20px' }}>Current Color: {color}</p>
    </div>
  );
}

export default ColorPicker;
