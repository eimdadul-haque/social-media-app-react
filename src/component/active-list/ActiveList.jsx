import "./ActiveList.css";
import React, { useContext, useEffect, useState } from 'react';
import Img from "../../asset/003.jpg";
import { Context } from "../../help/Context";
import { useNavigate } from "react-router-dom";
import { SignalRClient } from "../../help/SignalrClient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ConnectionAction } from "../../redux/action/ConnectionAction";
import { MessageAction } from "../../redux/action/MessageAction";
import { MesageNotifyAction } from "../../redux/action/MesageNotifyAction";

export default function ActiveList() {

    const dispatch = useDispatch();
    const [Connected, setConnected] = useState([]);

    useEffect(() => {
        let connection = SignalRClient();
        connection.on("Active", (id, name) => {
            if (localStorage.getItem("userName") !== name) {
                console.log(localStorage.getItem("userName"), "=====kisf");
                setConnected(Connected => [...Connected, { id, name }])
            }
        });

        connection.on("InActive", (id, name) => {
            setConnected(Connected.filter(x => x.id !== id))
        });

        connection.on("ToId", (name, msg) => {
            console.log(msg,"====msg");
            dispatch(MessageAction({ name, msg }));
            dispatch(MesageNotifyAction({ name, msg }));
        });

        dispatch(ConnectionAction(connection))
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
                Connected.map((data, index) =>
                    <div key={index} onClick={() => msgPage(data.id)} className="pro-img-name mt-2">
                        <div className="pro-img-container">
                            <img src={Img} />
                            <div className="active-dot"></div>
                        </div>
                        <span>{data.name} {index + 1}</span>
                    </div>
                )
            }
        </div>
    )
}

