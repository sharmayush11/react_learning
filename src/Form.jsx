import { useReducer } from "react";

function Form(){
    function reducer(state , action){
        return{
            ...state,
            [action.name] : action.value
        }
    }

    const[formDate,dispatch] = useReducer(reducer , {
        username : "",
        email : ""
    })
    function handleChange(e){
        dispatch({
            name : e.target.name,
            value:e.target.value
        })
    }
    
    return(
        <form>
            input type="text" name="username" value={formDate.username} onChange={handleChange}/>
            <input type="email" name="email" value={formDate.email} onChange={handleChange}/>
            <h2>Username : {formDate.username}</h2>
            <h2>Email : {formDate.email}</h2>
        </form>
    )
}
export default Form