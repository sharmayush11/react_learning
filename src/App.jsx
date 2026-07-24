import { useState } from 'react'

function Parent () {
  const [text , setText] = useState("")

  return (
    <div>
      <InputBox onChange={setText}/>
      <h3>Types : {text}</h3>
    </div>
  )
}

function InputBox({ onChange }){
  return <input type="text" onChange={(e) => onChange(e.target.value)}></input>
}


function App(){
  return(
    <>
    <Parent/>
  </>
  )
}
export default App