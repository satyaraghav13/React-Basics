
import './App.css'

function App() {


// const s={ color:"red"}

// let Numbers =[10, 20 ,30,40,50];


  let fruits= ["Apple" , "Mango" , "Orange" ,"Grapes","Banana"];
   
  return (
     <ul className="">
      {
    fruits.map((items,index)=><li key={index} style={{color: "red"}}>items</li>)
    }
     </ul>  
);
}
export default App
