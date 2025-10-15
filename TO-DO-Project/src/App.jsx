  import { useState } from "react";
  import "./App.css";

  function App() {
  const [items ,setItems]=useState({})
    const [inputData, SetInputData] = useState("");

    const handleOnChange = (e) => {
      SetInputData(e.target.value);
    };


    const onAdd=()=>{
      const newTask={
      id: Date.now(),
      text : inputData, 
    };

      setItems([...items , newTask]),
      SetInputData("")

      console.log(items);
    };

    return (
      <>
        <input type="text" value={inputData} onChange={handleOnChange} />
          <button onClick={onAdd}> add </button>
      </>
    );
  }

  export default App; 