import useToggle from "./useToggle"

function ToggleTest(){
    const[isOpen , toggleOpen] = useToggle()
    const[isFine , FineOpen] = useToggle()

    return(
        <div>
            <div>
                <button onClick={toggleOpen}>Toggle </button>{isOpen && <p>Hello this is working</p>}
            </div>
            <div>
                <button onClick={FineOpen}>Fine </button>{isFine && <p>Hello this is fine</p>}
            </div>
        </div>
    )
}
export default ToggleTest