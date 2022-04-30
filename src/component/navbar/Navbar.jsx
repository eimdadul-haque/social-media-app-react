import "./Navbar.css";
import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Img from "../../asset/003.jpg";
import Logo from "../../asset/logo.png";
import { Badge } from "@mui/material"
import { Link } from "react-router-dom";
import { Context } from "../../help/Context";
import { useSelector } from "react-redux";

export default function Navbar() {
    const { notify } = useSelector(state => state.MessageNotifyStore)
    const { dropdown, setDropdown } = useContext(Context);

    useEffect(() => {
        console.log(notify, "===notify");
    }, [notify])

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
                <div className="nav-ul main-icom-container">
                    <Link to="/" className="icon-container-main">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                    <div className="icon-container-main">
                        <Badge badgeContent={4} color="error">
                            <i className="fa-solid fa-user-group"></i>
                        </Badge>
                    </div>
                    <div className="icon-container-main">
                        <i className="fa-solid fa-file-video"></i>
                    </div>
                </div>
                <div className="nav-ul main-icom-container-two">
                    <div className="icon-container-name">
                        <img src={Img} />
                        <Link to='/profile' className="toProfile">
                            <span>Eimdadul</span>
                        </Link>
                    </div>
                    <div className="icon-container-main">
                        <Badge badgeContent={notify.length} color="error">
                            <i className="fa-solid fa-message"></i>
                        </Badge>
                    </div>
                    <div className="icon-container-main">
                        <i className="fa-solid fa-bell"></i>
                    </div>
                    <div onClick={() => setDropdown(!dropdown)} className="icon-container-main" >
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                <div className="barger-btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </>
    );
}

