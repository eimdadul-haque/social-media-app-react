import React, { useContext } from 'react'
import "./Pop_Up_Message.css";
import Chat from "../chat/Chat";
import { Context } from "../../help/Context";
import { Close } from '@mui/icons-material';

export default function Pop_Up_Message() {
    const { PopUpMsg, setPopUpMsg } = useContext(Context);
    return (
        <div style={{ display: PopUpMsg ? "" : "none" }} className='pop-up-msg'>
            <div>
                <Close onClick={() => setPopUpMsg(!PopUpMsg)} />
            </div>
            <Chat />
        </div>
    )
}
