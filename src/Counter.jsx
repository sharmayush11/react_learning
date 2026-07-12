import {useState} from 'react'
function Counter(){
    let [counter , setCounter] = useState(0)

    const addValue = () => {
        console.log("clicked" , counter);
        setCounter(counter + 1)
    }

    const clearCons = () => {
    setCounter(0)
}

    return(
        <div>
            <h1>Counter</h1>
            <h2>Counter value : {counter} </h2>

            <button onClick={addValue}> Add value </button>
            <br />
            <button onClick={clearCons}>Clear</button>
        </div>
    )
}
export default Counter