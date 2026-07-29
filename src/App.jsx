import { createContext , useContext , useState } from 'react'
import ThemeContext from "./theme-folder/ThemeContext"
import Toolbar from './theme-folder/toolbar'

function App() {
  const  [theme , setTheme] = useState("light")
  return (
    <>
      <ThemeContext.Provider value = {{theme , setTheme}}>
        <Toolbar/>
      </ThemeContext.Provider>
    </>
  )
}

export default App