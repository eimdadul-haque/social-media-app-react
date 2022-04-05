import React from 'react';
import "./Message.css"

export default function Message() {
    return (
        <div className='message-container'>
            {
                [...Array(6).keys()].map(() => {
                    return (
                        <div className='message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias delectus veniam sequi hic repudiandae expedita molestiae perferendis quos inventore itaque.</div>
                    )
                })
            }
        </div>
    )
}
