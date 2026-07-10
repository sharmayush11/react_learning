import { useState , useEffect } from 'react'

function First() {

    const [count , setCount] = useState(0)
    useEffect(() => {
        console.log("component re-rendered");
    })

  return (
    <div>
        <h2>Count : {count} </h2>
        <button onClick={() => setCount(count+1)}>Increament</button>
    </div>
  )
}

export default First