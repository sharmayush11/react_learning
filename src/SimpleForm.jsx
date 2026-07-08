import {useState} from 'react'

function SimpleForm() {
    const[name,SetName] = useState("")
    const[email,SetEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name : " , name);
        console.log("Email : " , email);
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Simple form in react</h3>
            <label>Name : </label>
            <input 
                type="text" 
                value={name}
                onChange={(e) => SetName(e.target.value)}
            />
            <br />
            <label>Email : </label>
            <input 
                type="email" 
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default SimpleForm