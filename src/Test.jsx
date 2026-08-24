import { useReducer } from "react";

function reducer(state , action){
    if(action.type === "increment"){
        return state + 1
    }
    if(action.type === "decrement"){
        return state - 1
    }
    if(action.type === "reset"){
        return 0
    }
    return state
}

function Test(){
    const [count , dispatch] = useReducer(reducer,0)

    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick={() => dispatch({type : "increment"})}>+</button>
            <button onClick={() => dispatch({type : "decrement"})}>-</button>
            <button onClick={() => dispatch({type : "reset"})}>reset</button>
        </>
    )
}
export default Test