import React from 'react'

export const Images = ({src, alt, setNewImageUrl}) => {
    return (
        <div className="small-img-col" onClick={() => setNewImageUrl(src)}>
            <img className="w-100 border small-img" src={src} alt={alt} />
        </div>
    )
}

export default Images;