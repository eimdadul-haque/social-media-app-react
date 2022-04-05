import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./MessageInput.css"

export default function ({ connection }) {
    const [Message, setMessage] = useState("");
    const sendMessage = (msg) => {
        connection.invoke("sendMessageToUser", " ", msg)
    }
    return (
        <div className='form-group'>
            <textarea onChange={(e) => setMessage(e.target.value)} className='form-control' style={{ width: "80%" }} />
            <button onClick={() => sendMessage(Message)} style={{ width: "20%", height: "10%" }} className='btn btn-primary form-control'>Send</button >
        </div>
    )
}
