import { useEffect , useEffectEvent, useState } from 'react'

function UseEE() {

    const [count , setCount] = useState(0)
  const onTick = useEffectEvent(() =>{
    console.log("Count : " ,count);
    setCount(c => c + 1)
    
  })
    useEffect(() => {
      const id = setInterval(() => {
        onTick()
      }, 3000);
        return () => {
            clearInterval(id)
        }
    }, [])

  return (
    <div>
      Count : {count}
    </div>
  )
}

export default UseEE