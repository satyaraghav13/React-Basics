import { Mycontext } from "./Mycontext"


function Fruits(){


 return(
<>

{fruits.map((fruits, i)=>

<li key={i}>
    {fruits}<button >Delete</button>
</li>

)}
</>

 )
}


export default Fruits