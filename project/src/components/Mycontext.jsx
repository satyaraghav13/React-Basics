import { createContext } from "react";


export const Mycontext = createContext();

function  FruitsProvider({children}){

   const [fruits, setfruits] = useState(["Mango" , "Banana" , "Apple"])

    return(
       

        <Mycontext.Provider value={{Fruits}}>
            {children}
        </Mycontext.Provider>
    )
}

export default FruitsProvider