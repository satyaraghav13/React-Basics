import { useState } from 'react'
import './App.css'
import ShowFruits from './components/ShowFruits'

function App() {
  const [fruits, setfruits] = useState(["Mango" , "Banana" , "Apple"])

  return (
    <>
     <ShowFruits/>
    </>
  )
}

export default App
