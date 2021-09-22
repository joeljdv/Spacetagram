import React, {useState} from 'react'

const Image = ({image}) => {
    return (
        <div className="image">
            <p><strong>{image.title}</strong></p>
            {image.date}
            <br/>
            <img src={image.url} />
            <br/>
            <button>Like</button>
            <br/>
            <br/>
        </div>
    )
}

export default Image 