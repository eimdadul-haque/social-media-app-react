import React, { useEffect, useState } from 'react';
import Message from '../message/Message';
import "./Chat.css"
import MessageInput from '../message-input/MessageInput';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { SignalRClient } from "../../help/SignalrClient";

export default function () {
  const [messages, setMessages] = useState([]);
  const connection = SignalRClient();
  useEffect(() => {
    connection.on("ToId", (name, msg) => {
      setMessages(messages => [...messages, { name, msg }])
    });
  }, []);
  const param = useParams();
  return (
    <>
      <div className='msg-list'>
        {
          messages.map((data, index) =>
            <div key={index} className={data.name === "eimdadul@gmail.com" ? "send" : "rec"}>
                <div>{data.msg}</div>
            </div>
          )
        }
      </div>
      <MessageInput connection={connection} id={param.connectionId} />
    </>
  )
}


// className={data.name === "Eimdadul" ? "msg-send" : "msg-rec"}