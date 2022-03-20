import React, { useContext } from 'react';
import "./Dropdown_menu.css";
import Img from '../../asset/003.jpg';
import { ExitToApp, Help, Settings } from '@mui/icons-material';
import { Context } from "../../help/Context";

export default function Dropdown_menu() {
    const { dropdown } = useContext(Context);
    return (
        <div style={{display: dropdown? "" : "none"}} className='drop-down-container'>
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
            <div className='drop-normal'>
                <div>
                    <ExitToApp />
                </div>
                <span>Log Out</span>
            </div>

        </div>
    )
}
