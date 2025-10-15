import { useRef, useState } from 'react'

import './App.css'

function App() {
  const[count,setCount]=useState(0)
  const inputRef = useRef(null);


    const increment=() => {
      setCount(count  +  1);
    };
     const decrement=() => {
      setCount(count  -  1);
    };
     const add=() => {
        const value =inputRef.current.value;
      setCount(count  + Number(value));
    };
     const subtract=() => {
        const value =inputRef.current.value;
      setCount(count  - Number(value));
    };
  


  return (
    <>
    <h1>Counter:{count}</h1>
    <input type="text" ref={inputRef} />
    <button onClick={increment}>Inc</button>
     <button onClick={decrement}>Dec</button>
      <button onClick={add}>Add</button>
       <button onClick={subtract}>Sub</button>     
    </>
  );

}
export default App
  