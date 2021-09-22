import React from 'react'

const Image = ({image}) => {
    return (
        <div>
            {image.title}
            {image.date}
            <img src={image.url} />
        </div>
    )
}

export default Image 