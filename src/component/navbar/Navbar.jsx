import "./Navbar.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "../../asset/003.jpg";
import Logo from "../../asset/logo.png";
import { Badge } from "@mui/material"

export default function Navbar() {
    return (
        <>
            <nav className="nav" >
                <div className="nav-ul">
                    <div className="nav-ul-logo">
                        <img src={Logo} />
                    </div>
                    <div className="search">
                        <input />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="nav-ul">
                    <div className="icon-container-main">
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className="icon-container-main">
                        <Badge badgeContent={4} color="error">
                            <i className="fa-solid fa-user-group"></i>
                        </Badge>
                    </div>
                    <div className="icon-container-main">
                        <i className="fa-solid fa-file-video"></i>
                    </div>
                </div>
                <div className="nav-ul">
                    <div className="icon-container-name">
                        <img src={Img} />
                        <span>Eimdadul</span>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-message"></i>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-bell"></i>
                    </div>
                    <div className="icon-container">
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

