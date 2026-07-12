import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`;
    });

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </>
    );
}
export default Timer