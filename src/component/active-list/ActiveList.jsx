import "./ActiveList.css";
import React, { useContext } from 'react';
import Img from "../../asset/003.jpg";
import { Context } from "../../help/Context";
import { useNavigate } from "react-router-dom";

export default function ActiveList() {
    // const { PopUpMsg, setPopUpMsg } = useContext(Context);
    const navigate = useNavigate();
    const msgPage = () => {
        navigate("/chat");
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
                [...Array(400).keys()].map((x) =>
                    <div key={x} onClick={() => msgPage()} className="pro-img-name mt-2">
                        <div className="pro-img-container">
                            <img src={Img} />
                            <div className="active-dot"></div>
                        </div>
                        <span>Eimdadul</span>
                    </div>
                )
            }
        </div>
    )
}

