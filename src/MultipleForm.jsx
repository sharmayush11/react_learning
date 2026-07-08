import {useState} from 'react'

function MultipleForm() {
    const [FormData,setFormData] = useState({
        name : "",
        email : "",
        age : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormData);
    }

    const handleChange = (e) => {
        const {name , value} = e.target //const name = e.target.name; const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Multiple input form</h2>
            <input 
                name = "name" 
                type="text" 
                placeholder="name" 
                value={FormData.name}
                onChange={handleChange}
            />
            <br />
            <input 
                name = "email" 
                type="email" 
                placeholder="Email" 
                value={FormData.email}
                onChange={handleChange}
            />
            <br />
            <input 
                name = "age" 
                type="number" 
                placeholder="Age"
                value={FormData.age}
                onChange={handleChange}
            />
            <br />
            <button type = "submit">Submit</button>
        </form>
    )
}
export default MultipleForm