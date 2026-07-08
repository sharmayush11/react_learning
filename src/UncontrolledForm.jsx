import {useRef} from 'react'

function MultipleForm() {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("name : ", nameRef.current.value);
        console.log("email : ", emailRef.current.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled form</h2>
            <input 
                name = "name" ref={nameRef} placeholder="name" />
            <br />
            <input 
                name = "email" ref={emailRef}  placeholder="Email"/>
            <br />
            <button type = "submit">Submit</button>
        </form>
    )
}
export default MultipleForm