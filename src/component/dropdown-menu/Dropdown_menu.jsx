import React, { useContext } from 'react';
import "./Dropdown_menu.css";
import Img from '../../asset/003.jpg';
import { ExitToApp, Help, Settings } from '@mui/icons-material';
import { Context } from "../../help/Context";
import { useNavigate } from "react-router-dom";

export default function Dropdown_menu() {
    const { dropdown, setDropdown } = useContext(Context);
    const navigate = useNavigate();

    const logout = () => {
        navigate("/login");
    }

    const multpleFun = () => {
        logout();
        setDropdown(!dropdown);
    }
    return (
        <div style={{ display: dropdown ? "" : "none" }} className='drop-down-container'>
            <div className='drop-pro'>
                <img src={Img} />
                <span>Eimdadul Haque</span>
            </div>
            <div className='divider'></div>
            <div className='drop-normal'>
                <div>
                    <Settings />
                </div>
                <span>Setting & Privacy</span>
            </div>
            <div className='drop-normal'>
                <div>
                    <Help />
                </div>
                <span>Help & Support</span>
            </div>
            <div onClick={() => multpleFun()} className='drop-normal'>
                <div>
                    <ExitToApp />
                </div>
                <span>Log Out</span>
            </div>

        </div >
    )
}
