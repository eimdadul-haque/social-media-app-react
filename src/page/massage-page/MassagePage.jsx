import React from 'react'
import Chat from '../../component/chat/Chat';
import "./MassagePage.css";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Navbar from '../../component/navbar/Navbar';

export default function MassagePage() {
    return (
        <>
        <Navbar/>
            <div className='row message-page'>
                <div className='col-6'>
                    <Chat />
                </div>
            </div>
        </>
    )
}
