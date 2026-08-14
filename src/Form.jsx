import { useReducer } from 'react';

function Form(){
    function reducer(state , action){
        return{
            ...state,
            [action.name] : action.value
        }
    }
    const[formData , dispatch] = useReducer(reducer , {
        username : "",
        email : ""
    })
    function handleChanges(e){
        dispatch({
            name : e.target.name,
            value : e.target.value
        })
    }
    return(
        <div>
            <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChanges}
            />
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChanges}
            />
        </div>
    )
}
export default value