import React, { useEffect, useState } from 'react';
import Message from '../message/Message';
import "./Chat.css"
import MessageInput from '../message-input/MessageInput';
import axios from 'axios';
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"

export default function () {
  const [messages, setMessages] = useState([]);
  const [conn, setConn] = useState([] );
  let con = []

  let connection;
  useEffect(() => {
    connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5200/chat")
      .configureLogging(LogLevel.Information)
      .build();

    connection.start().catch(err => console.log(err, "===err"));

    connection.on("chat", function (msg) {
      setMessages(messages => [...messages, msg])
    });

    connection.on("Connecteduser", function (id) {
      con.push(id);
      setConn(con);
      console.log(con, "====is");
    });

    connection.invoke("")
  }, [])

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
      <MessageInput connection={connection} />
    </>
  )
}


// className={data.name === "Eimdadul" ? "msg-send" : "msg-rec"}