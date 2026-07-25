import { createContext , useContext } from 'react'

const UserContext = createContext()

function App(){
  const user = "Yahubaba"

  return(
    <>
      <UserContext.Provider value={user}>
        <Parent/>
      </UserContext.Provider>
    </>
  )
}
export default App

function Parent () {
  return <Child/>

}
function Child () {
  return <GrandChild/>
}
function GrandChild () {
  const user = useContext(UserContext)
  return <h3>My name is {user} </h3>
}