import {useState} from 'react'

function Student(){
    const [student , setStudent] = useState({
        name : "John",
        grade : "A",
        city : "Delhi"
    })

    const changeCity = () => {
        setStudent({...student, grade : "B", city : "mumbai"})
    }
    return(
        <div>
            <h4> Name : {student.name} </h4>
            <p> Age : {student.grade} </p>
            <p> city : {student.city} </p>
            <button onClick={(changeCity)}> change city </button>
        </div>
    )
}
export default Student