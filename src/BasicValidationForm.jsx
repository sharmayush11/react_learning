import {useState} from 'react'

function BasicValidationForm() {
    const[name,SetName] = useState("")
    const[email,SetEmail] = useState("")
    const[error,SetError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || email) {
            SetError("Please fill all fields")
        }
        else{
            console.log("form submitted : ", {name , email});
            alert("Form submitted successfully")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Basic Validation form</h2>
            <input 
                type="text" 
                placeholder="enter your name" 
                value={name}
                onChange={(e) => SetName(e.target.value)}
            />
            <br />
            <input 
                type = "email" 
                placeholder="enter your email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
            />
            {error && <p style={{color : "red"}}>{error}</p>}
            <br />
            <button type = "submit">Submit</button>
        </form>
    )
}
export default BasicValidationForm