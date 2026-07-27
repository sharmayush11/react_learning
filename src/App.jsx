import { useContext , createContext } from 'react'
const UserContext = createContext();

function App() {
  const user = "Yahubaba"
  return (
    <>
      <UserContext.Provider value={user}>
        <Parent/>
      </UserContext.Provider>
    </>
  )
}

function Parent(){
  return <Child/>
}
function Child(){
  const user = useContext(UserContext)
  return (
    <div>
      <h1 style={{color:"blue"}}> name : { user }</h1>
      <GrandChild/>
    </div>
  )
  
}
function GrandChild(){
  const time = useContext(UserContext)
  return <h2>My channel name is {time} </h2>
}

export default App