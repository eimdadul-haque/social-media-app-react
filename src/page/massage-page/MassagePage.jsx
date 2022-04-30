import React from 'react'
import Chat from '../../component/chat/Chat';
import "./MassagePage.css";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export default function MassagePage() {
    return (
        <div className='row message-page'>
            <div className='col-6'>
                <Chat />
            </div>
        </div>
    )
}
