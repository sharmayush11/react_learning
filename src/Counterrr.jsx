import { useState, useCallback} from 'react'

function Counterrr() {
  const [count, setCount] = useState(0)  

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])
    
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={increment}>Increase</button>
    </div>
  )
}

export default Counterrr