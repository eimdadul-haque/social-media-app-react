import "./ActiveList.css";
import React, { useContext, useEffect, useState } from 'react';
import Img from "../../asset/003.jpg";
import { Context } from "../../help/Context";
import { useNavigate } from "react-router-dom";
import { SignalRClient } from "../../help/SignalrClient";
import axios from "axios";

export default function ActiveList() {

    const [Connected, setConnected] = useState([]);
    let act = []
    useEffect(() => {
        let connection = SignalRClient();
        connection.on("Active", (id, name) => {
            setConnected(Connected=> [...Connected, {id, name}])
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

