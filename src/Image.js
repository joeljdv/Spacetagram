import React, {useState} from 'react'

const Image = ({image}) => {
    return (
        <div className="image">
            <p><strong>{image.title}</strong></p>
            {image.date}
            <br/>
            <img src={image.url} />
            <br/>
            <button><i className="far fa-heart"></i></button>
            <br/>
            <br/>
        </div>
    )
}

export default Image 