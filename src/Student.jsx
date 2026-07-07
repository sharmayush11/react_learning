import {useState} from 'react'

function Student(){
    const [student , setStudent] = useState({
        name : "John",
        grade : "A",
        city : "Delhi"
    })

    const changeCity = () => {
        setStudent({...student, city : "Mumbai"})
    }
    return(
        <div>
            <h2> Name : {student.name} </h2>
            <p> Age : {student.grade} </p>
            <p> city : {student.city} </p>
            <button onClick={(changeCity)}> change city </button>
        </div>
    )
}
export default Student