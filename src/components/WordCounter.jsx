import React, { useState } from 'react'

function WordCounter() {
const [wordcount,setWordcount] = useState(0)
const [txt,setTxt] = useState('')

function handlec(e) {
      const abc = e.target.value;
      setTxt(abc);

      const words = abc.trim().split(/\s+/).filter((word) => word.length > 0);
      setWordcount(words.length); 

    
}
 

  return (
 <>
 
 
<div style={{textAlign:'center',marginTop:'20px'}}>
    <h1>Words Counter</h1>
<textarea 
value={txt}
onChange={handlec}
placeholder='Type your text here'
style={{
    width: '80%',
    height: '150px',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
    border: '1px solid #ccc',
  }}
/>
<p>
    <strong>Word Count : </strong>{wordcount}
</p>
</div>
 </>
  )
}

export default WordCounter