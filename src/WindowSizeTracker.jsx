import { useState, useEffect } from "react";

function WindowSizeTracker() {
    const [width , setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)
    } ,[])

    return (
        <div>
            <h2> window width tracker </h2>
            <p>Current width : {width}px </p>
        </div>
    );
}
export default WindowSizeTracker