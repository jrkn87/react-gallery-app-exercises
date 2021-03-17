import React from 'react';

const Form = ({formInputUrl, formHandleOnClick, formSetInputUrl}) => {
    return (
        <form action="">
            <input 
                type = "url" 
                required = ""
                value = {formInputUrl}
                placeholder = "URL..."
                onChange = {event => formSetInputUrl(event.target.value)}/>
            <button onClick = {formHandleOnClick}>Add image</button>
        </form>
    )
}

export default Form;