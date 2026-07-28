import { createContext , useContext } from 'react'

const UserContext = createContext();

function App() {
  const user = { name : "ayusharma" , role : "frontend developer" }
  return (
    <UserContext.Provider value = {user}>
      <Parent/>
    </UserContext.Provider>
  )
}

function Parent(){
  return <Child/>
}
function Child(){
  return <ParentChild/>
}
function ParentChild(){
  const { name , role } = useContext(UserContext)
  return <h2> Welcome ! {name} your role is {role} </h2>
}

export default App