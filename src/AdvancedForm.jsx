import {useState} from 'react'

function AdvancedForm() {
    const [FormData,setFormData] = useState({
        gender : "",
        agree : false,
        country : "India"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormData);
    }

    const handleChange = (e) => {
        const {name , type , value , checked} = e.target //const name = e.target.name; const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            [name] : type === "checked"? checked : value
        }))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Form wiht checkbox , radio and select</h2>

            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="male"
                    checked={FormData.gender == "male"}
                    onChange={handleChange}
                />Male
            </label>

            <label>
                <input 
                    type="radio" 
                    name="gender" 
                    value="Female"
                    checked={FormData.gender == "Female"}
                    onChange={handleChange}
                />Male
            </label>
            <br />

            <label>
                Country:
                <select 
                    name="country" 
                    value={FormData.country} 
                    onChange={handleChange}>
                    <option value="India"></option>
                    <option value="USA"></option>
                    <option value="UK"></option>
                </select>
            </label>
            <br />

            <label>
                <input 
                    type="checkbox" 
                    name="agree"
                    checked={FormData.agree}
                    onChange={handleChange}/>
                    I agree
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    )
}
export default AdvancedForm