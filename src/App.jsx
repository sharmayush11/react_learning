import { createContext , useContext , useState } from 'react'
 
const ThemeContext = createContext();
function App() {
  const  [theme , setTheme] = useState("light")
  return (
    <ThemeContext.Provider value = {{theme , setTheme}}>
      <ToolBar/>
    </ThemeContext.Provider>
  )
}

function ToolBar(){
  return <ThemeButton/>
}
function ThemeButton(){
  const { theme , setTheme } = useContext(ThemeContext)
  return(
    <button onClick={()=> setTheme(theme === "light"?"dark":"light")} 
    style={{
      backgroundColor : theme === "light"?"#fff":"#333" ,
      color : theme === "light"?"#333":"#fff" 
    }} >Current theme : {theme}</button>
  )
}

export default App