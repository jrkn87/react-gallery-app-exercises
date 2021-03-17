/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Image = ({ url, setShowcaseUrl }) => {

    const handleOnClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowcaseUrl(url);
    }

    return (
        <img 
            src = {url}
            alt = "image" 
            width = "200" 
            height = "100"
            onClick = {handleOnClick} 
        ></img>
    )
}

export default Image;