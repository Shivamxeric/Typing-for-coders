import  { useState } from 'react'

const App = () => {
 
  const [todos , setTodos] = useState([]);


function addTodo() {
  
  // const some;

  setTodos(todos)

}








  return (
    <>
    <div>Todo App Using Ts</div>
 <div>
<div>{todos.map((todo, index) => (
  <div key={index}>{todo}</div>
))}</div>

  <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          placeholder="Add a task..."
          className="flex-grow p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /><button onClick={addTodo}>Add</button>

 </div>
    </>
     
  )
}

export default App