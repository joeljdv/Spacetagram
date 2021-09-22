import React, {useState} from 'react'

const Image = ({image}) => {

    const[liked, setLiked] = useState(false)

    const toggleClass = () => {
        let currentState = liked
        setLiked(!currentState)
    }

    return (
        <div className="image">
            <p><strong>{image.title}</strong></p>
            {image.date}
            <br/>
            <img src={image.url} />
            <br/>
            <button className={liked ? 'btn' : null} onClick={toggleClass}><i className="far fa-heart"></i></button>
            <br/>
            <br/>
        </div>
    )
}

export default Image 