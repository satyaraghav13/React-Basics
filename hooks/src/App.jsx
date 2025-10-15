import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inputData, SetInputData] = useState(0);

  const handleOnChange = (e) => {
    SetInputData(e.target.value);
  };

  return (
    <>
      <p>Count : {count} </p>
      <input type="text" onChange={handleOnChange} />
      <button
        onClick={() => {
          setCount(count + 1 );
        }}
      >
        Inc
      </button>

      <button
        onClick={() => {
          setCount(count - 1 );
        }}
      >
        dec
      </button>
      <button
        onClick={() => {
          setCount(Number(count) + Number(inputData));
        }}
      >
        add
      </button>

       <button
        onClick={() => {
          setCount(Number(count) - Number(inputData));
        }}
      >
        sub
      </button>
    </>
  );
}

export default App;