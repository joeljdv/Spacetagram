import React from 'react'

const Image = ({image}) => {
    return (
        <div className="image">
            {image.title}
            <br/>
            {image.date}
            <br/>
            <img src={image.url} />
            <hr/>
        </div>
    )
}

export default Image 