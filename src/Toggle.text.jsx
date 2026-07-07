import {useState} from 'react'

function ToggleText(){
    const [Liked , isLiked] = useState(false);
    return(
        <div>
            <button onClick={() => isLiked(!Liked)}> {Liked? "❤️ liked " : "👍 like "}</button>
        </div>
    )
}
export default ToggleText;