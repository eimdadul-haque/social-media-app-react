import React, { useEffect, useState } from 'react';
import Message from '../message/Message';
import "./Chat.css"
import MessageInput from '../message-input/MessageInput';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function () {
  const [messages, setMessages] = useState([]);
  const param = useParams(); 
  return (
    <>
      <div className='msg-list'>
        {
          messages.map((data, index) =>
            <div key={index} className={data.name === "Eimdadul" ? "send" : "rec"}>
              <div  >
                <div>{data}</div>
              </div>
            </div>
          )
        }
      </div>
      <MessageInput />
    </>
  )
}


// className={data.name === "Eimdadul" ? "msg-send" : "msg-rec"}