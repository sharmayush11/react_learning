function Hello({name = "Guest" , age = "not default" , city = "unknown" , hobbies}){
    return(
        <>
            <h2>Hello , {name} </h2>
            <p> age is , {age} </p>
            <p> city is , {city} </p>

            <ul>
                {hobbies.map((hobby,index) => (
                    <li key = {index}> {hobby} </li>
                ))}
            </ul>
        </>
    )
}
export default Hello 