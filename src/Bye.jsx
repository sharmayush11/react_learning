// import styles from "./Bye.module.css"
function Bye(){
    const users = [
    {firstName: "Rohit", lastName:"shakya",age:20},
    {firstName: "Ayush", lastName:"sharma",age:22},
    {firstName: "Aditya",lastName:"verma",age:21}
    ]

    function fullName(user){
        return user.firstName + " " + user.lastName
    }
    
    return(
        <div>
            <h2>Person details</h2>
            <ul>
                {users.map((user,index) =>(
                    <li>{fullName(user)} is {user.age} years old</li>
                ))}
            </ul>
        </div>
    )
}
export default Bye