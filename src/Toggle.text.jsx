import {useState} from 'react'

function Toggle(){
    const [isVisible,SetisVisible] = useState[false]
    return(
        <div>
            <button onClick={() => SetisVisible(!isVisible)}>
            {isVisible? "Hide":"Show"}Text
            </button>
        </div>
    )
}
export default Toggle