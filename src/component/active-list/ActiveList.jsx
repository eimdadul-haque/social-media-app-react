import "./ActiveList.css";
import React, { useContext, useEffect, useState } from 'react';
import Img from "../../asset/003.jpg";
import { Context } from "../../help/Context";
import { useNavigate } from "react-router-dom";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export default function ActiveList() {

    const [Connected, setConnected] = useState([]);
    useEffect(() => {
        let connection = new HubConnectionBuilder()
            .withUrl("http://localhost:5200/chat")
            .configureLogging(LogLevel.Information)
            .build();
        connection.start().catch(err => console.log(err));
        connection.on("Connecteduser", function (ConnectionId) {
            setConnected(Connected => [...Connected, ConnectionId])
        });
    }, [])

    // const { PopUpMsg, setPopUpMsg } = useContext(Context);
    const navigate = useNavigate();
    const msgPage = (id) => {
        navigate("/chat/" + id);
    }

    return (
        <div className="list-container">
            <div className="list-title">
                <h4 className="mt-3">Contact</h4>
                <div className="active-list-icon">
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
            <h1></h1>
            {
                Connected.map((ConnectionId, index) =>
                    <div key={index} onClick={() => msgPage(ConnectionId)} className="pro-img-name mt-2">
                        <div className="pro-img-container">
                            <img src={Img} />
                            <div className="active-dot"></div>
                        </div>
                        <span>Connection {index + 1}</span>
                    </div>
                )
            }
        </div>
    )
}

