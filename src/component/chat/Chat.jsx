import React, { useEffect, useState } from 'react';
import Message from '../message/Message';
import "./Chat.css"
import MessageInput from '../message-input/MessageInput';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { API_LINK } from '../../api/API_LINK';

export default function () {
  const { connection } = useSelector(state => state.ConnectionStore);
  const { messages } = useSelector(state => state.MessageStore);
  const { info } = useSelector(state => state.UserInfoStore);
  const [message, setmessage] = useState([])

  useEffect(() => {
    axios.get(API_LINK.GET_MESSAGE + `?sender=${localStorage.getItem("userName")}&receiver=${info.name}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => {
        console.log(res.data,"====res.data");
        setmessage(messages || res.data)
      })
      .catch(err => console.log(err, "get msg err"))
  }, [messages, info]);

  return (
    <>
      <div className='msg-list'>
        {
          message.map((data, index) =>
            <div key={index} className={data.name === localStorage.getItem("userName") ? "send" : "rec"}>
              <div>{data.msg}</div>
            </div>
          )
        }
      </div>
      <MessageInput connection={connection} id={info.id} />
    </>
  )
}


// className={data.name === "Eimdadul" ? "msg-send" : "msg-rec"}