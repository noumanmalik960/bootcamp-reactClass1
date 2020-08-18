import React from 'react';



function MediaCard({title, body, imageUrl}) {
    return (
        <div>
            <p>{title} (above prop is passed as JSX)</p>
            <p>{body}</p>
            <img src={imageUrl} alt="Sample image"/>
        </div>
    )
}


export default MediaCard