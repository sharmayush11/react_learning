import { useState } from 'react'

function LikeButton(){
    const [liked,setLiked] = useState(false)

    return(
        <div>
            <button onClick={() => setLiked (!liked)}>
            {liked? "💗 Liked ":" 👍Like "}Text
        </button>
        {liked && <p> this is a scrt msg </p>}
        </div>
    )
}
export default LikeButton