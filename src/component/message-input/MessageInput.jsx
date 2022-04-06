import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./MessageInput.css"

export default function ({ connection, id }) {
    const [Message, setMessage] = useState("");
    const sendMessage = (msg, id) => {
        connection.invoke("sendMessageToUser", id, msg).catch(err=>console.log(err));
    }
    return (
        <div className='form-group'>
            <textarea onChange={(e) => setMessage(e.target.value)} className='form-control' style={{ width: "80%" }} />
            <button onClick={() => sendMessage(Message, id)} style={{ width: "20%", height: "10%" }} className='btn btn-primary form-control'>Send</button >
        </div>
    )
}
