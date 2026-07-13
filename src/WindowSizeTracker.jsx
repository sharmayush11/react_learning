import { useState, useEffect } from "react";

function WindowSizeTracker() {
    const [width , setWidth] = useState(window.innerWidth)
    useEffect(() => {
        
    } ,[])

    return (
        <div>
            <h2> window width tracker </h2>
            <p>Current width : {width} </p>
        </div>
    );
}
export default WindowSizeTracker